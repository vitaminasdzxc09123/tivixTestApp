import React, {
    useCallback,
    useEffect,
    useState
}                           from 'react';
import { Text, View }             from 'react-native';
import {
    useDispatch,
    useSelector
}                           from 'react-redux';
import PropTypes            from 'prop-types';

import {
    isLoadingMinifigDetailedSelector,
    isLoadingMinifigsSelector,
    minifigDetailedSelector,
    minifigsSelector
}                           from '../../store/selector/Minifigs';
import {
    getMinifigsDetailed,
    getMinifigsList
}                           from '../../store/actions/Minifigs';
import { useThemedStyles }  from '../../hooks/useThemeStyles';

import AnimatedPress        from '../../components/base/AnimatedPress';
import Loader               from '../../components/base/Loader';
import ScreenWrapper        from '../../components/ui/ScreenWrapper';

import CarouselList         from '../../components/ui/CarouselList';
import ROUTES               from '../../constants/Routes';
import { useModal }         from '../../components/modals/utils/useModal';
import { MODAL }            from '../../components/modals/constants';
import Styles               from './styles';
import DescriptionMinifigs  from './ui/DescriptionMinifigs';

const text = {
    headerTitle : 'CHOOSE YOUR MINIFIG',
    myOrders    : ' My Order'
};

const MOCK_PAYLOAD = {
    page_size : 5,
    id        : 246
};

function HomeScreen({ navigation }) {
    const { styles } = useThemedStyles(Styles);

    const dispatch = useDispatch();

    const minifigsList = useSelector(minifigsSelector);
    const minifigsDetailed = useSelector(minifigDetailedSelector);

    const isLoadingMinifigs = useSelector(isLoadingMinifigsSelector);
    const isLoadingMinifigsDetailed = useSelector(isLoadingMinifigDetailedSelector);

    const { toggleModal } = useModal();

    const [ activeMinifig, setActiveMinifigs ] = useState({});

    const handleDetailedMinifigs = useCallback((minifig) => {
        setActiveMinifigs(minifig);
        dispatch(getMinifigsDetailed(minifig.set_num));
    }, [ activeMinifig ]);

    const handleSubmitMinifigs = useCallback(() => {
        navigation.navigate(ROUTES.PERSONAL_FORM_SCREEN, { minifigsData : activeMinifig });
    }, [ activeMinifig ]);

    useEffect(() => {
        dispatch(getMinifigsList(MOCK_PAYLOAD));
    }, []);


    const handleOpenOrder = useCallback(() => {
        toggleModal(MODAL.ORDER_MODAL);
    }, []);

    const renderDiscriptionCarousel = useCallback(() => {
        return (
            <DescriptionMinifigs
                handleSubmit = {handleSubmitMinifigs}
                data         = {minifigsDetailed}
            />
        );
    }, [ minifigsDetailed, activeMinifig ]);

    const renderHeader = useCallback(() => {
        return (
            <View style = {styles.headerContainer}>
                <AnimatedPress
                    onPress = {handleOpenOrder}
                    style   = {styles.orderContainer}
                >
                    <Text style = {styles.titleOrder}>
                        {text.myOrders}
                    </Text>
                </AnimatedPress>
            </View>
        );
    }, [ minifigsDetailed, activeMinifig ]);

    return (
        <ScreenWrapper
            useBottomInset
            useScroll
            headerTitle    = {text.headerTitle}
            containerStyle = {styles.container}
        >
            {isLoadingMinifigs && !Boolean(minifigsList?.results) ?
                <View style = {styles.loaderContainer}>
                    <Loader />
                </View>
                :
                <View>
                    {renderHeader()}
                    <CarouselList
                        isLoadingDetailed = {isLoadingMinifigsDetailed}
                        renderDescription = {renderDiscriptionCarousel}
                        handleCard        = {handleDetailedMinifigs}
                        data              = {minifigsList?.results}
                    />
                </View>

            }
        </ScreenWrapper>
    );
}

HomeScreen.propTypes = {
    navigation : PropTypes.object.isRequired
};

export default React.memo(HomeScreen);
