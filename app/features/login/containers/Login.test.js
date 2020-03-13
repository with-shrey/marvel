import React from "react";
import { shallow } from "enzyme";
import LoginView from "./LoginView";
//import Enzyme from "enzyme";
//import Adapter from "enzyme-adapter-react-16";

//Enzyme.configure({ adapter: new Adapter() });

describe("LoginView", () => {
  describe("Rendering", () => {
    it("should match to snapshot", () => {
      const component = shallow(<LoginView />);
      expect(component).toMatchSnapshot();
    });
  });
});
