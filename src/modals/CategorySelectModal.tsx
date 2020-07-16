import React, {FC} from "react";
import {Icon, Left, ListItem, Right, Text} from "native-base";
import AppModal, {AppModalProps} from "../components/AppModal";
import {useStore} from "../stores";
import {observer} from "mobx-react";
import {FlatList} from "react-native-gesture-handler";
import {SafeAreaView} from "react-native-safe-area-context";
import {CategoryEntity} from "../entities/CategoryEntity";

interface Props extends Omit<AppModalProps, 'title' | 'children'> {
}

type WithOnSelectProps = {
    onSelect?: (category: CategoryEntity) => any
};

const CategorySelectModal: FC<Props & WithOnSelectProps> = (props) => {
    const {categoryStore} = useStore();
    const handleSelect = (category: CategoryEntity) => {
        categoryStore.setCategory(category);
        if (props.onSelect) {
            props.onSelect(category)
        }
        props.setVisibility(false);
    };
    return (
        <AppModal title={'Select Location'} {...props}>
            <SafeAreaView style={{flex: 1}}>
                <FlatList
                    data={categoryStore.restaurants}
                    renderItem={({item: category}) => (
                        <ListItem
                            onPress={() => handleSelect(category)}
                            selected={category.id === categoryStore.current.id}
                        >
                            <Left>
                                <Text>{category.name}</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </ListItem>
                    )}
                    keyExtractor={item => String(item.id)}
                />
            </SafeAreaView>
        </AppModal>
    );
};

export default observer(CategorySelectModal);