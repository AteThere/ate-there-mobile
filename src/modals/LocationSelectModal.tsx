import React, {FC, FunctionComponent, useState} from "react";
import {Body, Button, Content, H3, Icon, List, ListItem, Right, Separator, Text} from "native-base";
import AppModal, {AppModalProps} from "../components/AppModal";
import {useStore} from "../stores";
import {observer} from "mobx-react";
import {SearchBar} from "react-native-elements";
import LocationServices from '../functions/location-services'
import {LocationEntity} from "../entities/LocationEntity";

interface Props extends Omit<AppModalProps, 'title' | 'children'> {
}

type WithCloseProps = {
    close: () => any;
};

type WithOnSelectProps = {
    onSelect?: (location: LocationEntity) => any
};

const LocationSearch: FunctionComponent<WithCloseProps & WithOnSelectProps> = ({close, onSelect}) => {
    let searchBox: SearchBar | null;
    const {locationStore} = useStore();
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
            locationStore.set(locations[0]);
            if (onSelect) {
                onSelect(locations[0])
            }
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

const LocationHistoryList: FunctionComponent<WithCloseProps & WithOnSelectProps> = observer(({close, onSelect}) => {
    const {locationStore} = useStore();

    if (locationStore.collection.size === 0) {
        return <H3 style={{margin: 15}}>No Locations used</H3>;
    }

    return (
        <List>
            <Separator bordered>
                <Text>History</Text>
            </Separator>
            {locationStore.asArray.map(location => (
                <ListItem onPress={() => {
                    locationStore.set(location);
                    if (onSelect) {
                        onSelect(location)
                    }
                    close()
                }} key={location.id}>
                    <Body>
                        <Text>{location.name}</Text>
                        <Text note>{location.id}</Text>
                    </Body>
                    <Right>
                        <Button danger small onPress={() => locationStore.remove(location)}>
                            <Icon name={'close'}/>
                        </Button>
                    </Right>
                </ListItem>
            ))}
        </List>
    );
});

const LocationSelectModal: FC<Props & WithOnSelectProps> = ({onSelect, ...props}) => {
    return (
        <AppModal title={'Select Location'} {...props}>
            <Content>
                <LocationSearch close={() => props.setVisibility(false)} onSelect={onSelect}/>
                <LocationHistoryList close={() => props.setVisibility(false)} onSelect={onSelect}/>
            </Content>
        </AppModal>
    );
};

export default LocationSelectModal;