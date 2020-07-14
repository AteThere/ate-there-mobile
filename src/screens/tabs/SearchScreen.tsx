import React, {useState} from 'react';
import {
    Body,
    Button,
    Container,
    Content,
    Icon,
    Left,
    List,
    ListItem,
    Right,
    Separator,
    Text,
    Thumbnail
} from 'native-base';
import AppHeader from "../../components/AppHeader";
import {useStore} from "../../stores";
import LocationSelectModal from "../../modals/LocationSelectModal";

const SearchScreen = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {
    const {searchStore} = useStore();
    const [locationModalVisible, setLocationModalVisibility] = useState(false);
    return (
        <Container>
            <AppHeader title={'Search'}/>
            <LocationSelectModal visible={locationModalVisible} setVisibility={setLocationModalVisibility}/>
            <Content scrollEnabled={false}>
                <Text>Modal Visibility: {locationModalVisible ? 'True' : 'False'}</Text>
                <List scrollEnabled={false}>
                    <Separator bordered>
                        <Text>Location</Text>
                    </Separator>
                    <ListItem onPress={() => setLocationModalVisibility(true)}>
                        <Left>
                            <Text>{searchStore.location ? searchStore.location.name : 'No Location Set'}</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>
                    <Separator bordered>
                        <Text>Category</Text>
                    </Separator>
                    <ListItem onPress={() => true}>
                        <Left>
                            <Text>{searchStore.category}</Text>
                        </Left>
                        <Right>
                            <Icon name="arrow-forward"/>
                        </Right>
                    </ListItem>


                </List>
                <List scrollEnabled={true}>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square source={{uri: 'Image URL'}}/>
                        </Left>
                        <Body>
                            <Text>Sankhadeep</Text>
                            <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Text>View</Text>
                            </Button>
                        </Right>
                    </ListItem>
                </List>
            </Content>
        </Container>
    );
};

export default SearchScreen;