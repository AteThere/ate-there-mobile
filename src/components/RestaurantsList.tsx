import {ActivityIndicator, FlatList} from "react-native";
import {Content, H2, Text} from "native-base";
import {SafeAreaView} from "react-native-safe-area-context";
import React, {FunctionComponent} from "react";
import {ListItem} from 'react-native-elements'

type Props = {
    data: Array<{ id: any }>;
    isLoading: boolean,
};
const RestaurantsList: FunctionComponent<Props> = ({data, isLoading}) => {
    const keyExtractor = (item: { id: any; }) => String(item.id)
    // @ts-ignore
    const renderItem = ({item}) => (
        <ListItem
            title={item.name}
            subtitle={<Text note>{item.address1}</Text>}
            leftAvatar={{
                size: 60,
                rounded: false,
                title: item.name[0],
                source: (item.image_url && item.image_url.trim() !== '') ? {uri: item.image_url} : undefined
            }}
            bottomDivider
            chevron
        />
    )
    const flatListProps = {
        data,
        renderItem,
        keyExtractor,
        refreshControl: isLoading ? <ActivityIndicator size={"large"}/> : null,
    };
    return (!isLoading && data.length === 0)
        ? (
            <Content padder>
                <H2>No Restaurants Found</H2>
            </Content>
        )
        : (
            <SafeAreaView style={{flex: 1}}>
                <FlatList {...flatListProps} />
            </SafeAreaView>
        );
};

export default RestaurantsList;