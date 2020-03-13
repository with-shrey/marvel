import React from "react";
import { shallow } from "enzyme";
import HomeView from '../HomeView';
import { FlatList } from "react-native";

describe("HomeView", () => {
    it("should match to snapshot", () => {
      const component = shallow(<HomeView />)
      expect(component).toMatchSnapshot();
    });
    it("should render a list", () => {
      const component = shallow(<HomeView />);
      const List = component.find('FlatList')
      expect(List).toBeTruthy()
    });
    it("should render a Header", () => {
      const component = shallow(<HomeView />);
      const HeaderView = component.find('HeaderView')
      expect(HeaderView).toBeTruthy()
    });
});

