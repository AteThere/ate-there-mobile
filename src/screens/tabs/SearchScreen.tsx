import React, {useState} from 'react';
import {Container, Icon, Left, List, ListItem, Right, Separator, Text} from 'native-base';
import AppHeader from "../../components/AppHeader";
import {useStore} from "../../stores";
import LocationSelectModal from "../../modals/LocationSelectModal";
import CategorySelectModal from "../../modals/CategorySelectModal";
import {LocationEntity} from '../../entities/LocationEntity';
import RestaurantsSearchResults from "../../components/RestaurantsSearchResults";
import {CategoryEntity} from "../../entities/CategoryEntity";

const SearchScreen = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {
    const {searchStore, categoryStore, locationStore} = useStore();
    const [locationModalVisible, setLocationModalVisibility] = useState(false);
    const [categoryModalVisible, setCategoryModalVisibility] = useState(false);
    return (
        <Container>
            <AppHeader title={'Search'}/>
            <LocationSelectModal
                visible={locationModalVisible}
                setVisibility={setLocationModalVisibility}
                onSelect={(location: LocationEntity) => searchStore.setLocation(location)}
            />
            <CategorySelectModal
                visible={categoryModalVisible}
                setVisibility={setCategoryModalVisibility}
                onSelect={(category: CategoryEntity) => searchStore.setCategory(category)}
            />
            <List scrollEnabled={false}>
                <Separator bordered>
                    <Text>Location</Text>
                </Separator>
                <ListItem onPress={() => setLocationModalVisibility(true)}>
                    <Left>
                        <Text>{!!locationStore.current.name ? locationStore.current.name : 'No Location Set'}</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward"/>
                    </Right>
                </ListItem>
                <Separator bordered>
                    <Text>Category</Text>
                </Separator>
                <ListItem onPress={() => setCategoryModalVisibility(true)}>
                    <Left>
                        <Text>{!!categoryStore.current.name ? categoryStore.current.name : 'No Category Set'}</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward"/>
                    </Right>
                </ListItem>
            </List>
            <RestaurantsSearchResults/>
        </Container>
    );
};

export default SearchScreen;