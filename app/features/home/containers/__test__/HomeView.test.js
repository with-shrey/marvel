import React from "react";
import { shallow } from "enzyme";
import HomeView from '../HomeView';

describe("HomeView", () => {
    it("should match to snapshot", () => {
      const component = shallow(<HomeView />)
      expect(component).toMatchSnapshot();
    });
});

