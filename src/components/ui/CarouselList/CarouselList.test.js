/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import CarouselList from './CarouselList';

it('renders correctly', () => {
    const tree = renderer.create(<CarouselList />).toJSON();

    expect(tree).toMatchSnapshot();
});
