import React, {FC, FunctionComponent, useState} from "react";
import {Body, Button, Content, H3, Icon, List, ListItem, Right, Separator, Text} from "native-base";
import AppModal, {AppModalProps} from "../components/AppModal";
import {useStore} from "../stores";
import {observer} from "mobx-react";
import {SearchBar} from "react-native-elements";
import LocationServices from '../functions/location-services'

interface Props extends Omit<AppModalProps, 'title' | 'children'> {
}

type WithCloseProps = {
    close: () => any;
};

const LocationSearch: FunctionComponent<WithCloseProps> = ({close}) => {
    let searchBox: SearchBar | null;
    const {searchStore} = useStore();
    const [searchText, updateSearch] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [subtext, setSubText] = useState('');

    const handleOnEndEditing = async () => {
        setLoading(true);
        const locations = await LocationServices.getGeo(searchText);
        if (locations.length === 0) {
            setSubText('No address found. Please try again.');
            setLoading(false);
        } else {
            searchStore.setLocation(locations[0]);
            searchBox?.clear();
            close();
        }
    }

    const handleOnChangeText = (text: string) => {
        if (text !== '') {
            setSubText('Press Enter when done');
        } else {
            setSubText('');
        }
        updateSearch(text);
    }

    return (
        <>
            <SearchBar
                ref={search => searchBox = search}
                onSubmitEditing={handleOnEndEditing}
                showLoading={isLoading}
                platform={'ios'}
                placeholder="Type Here..."
                onChangeText={handleOnChangeText}
                value={searchText}
            />
            <Text note style={{textAlign: 'center'}}>{subtext}</Text>
        </>
    );
};

const LocationHistoryList: FunctionComponent<WithCloseProps> = observer(({close}) => {
    const {searchStore} = useStore();

    if (searchStore.locationHistory.length === 0) {
        return <H3 style={{margin: 15}}>No Locations used</H3>;
    }

    return (
        <List>
            <Separator bordered>
                <Text>History</Text>
            </Separator>
            {searchStore.locationHistory.map(location => (
                <ListItem onPress={() => {
                    searchStore.setLocation(location);
                    close()
                }} key={location.id}>
                    <Body>
                        <Text>{location.name}</Text>
                        <Text note>{location.id}</Text>
                    </Body>
                    <Right>
                        <Button danger small onPress={() => searchStore.delLocation(location)}>
                            <Icon name={'close'}/>
                        </Button>
                    </Right>
                </ListItem>
            ))}
        </List>
    );
});

const LocationSelectModal: FC<Props> = (props) => {
    const {searchStore} = useStore();

    return (
        <AppModal title={'Select Location'} {...props}>
            <Content>
                <LocationSearch close={() => props.setVisibility(false)}/>
                <LocationHistoryList close={() => props.setVisibility(false)}/>
            </Content>
        </AppModal>
    );
};

export default LocationSelectModal;