import listSaga from "../listSaga";
import * as actions from "../../actions";
import recordSaga from "app/lib/recordSaga";
import Api from "app/api";
import ApiConstants from "app/api/ApiConstants";

describe("Character List Tests", () => {
  it("should give auth error", async () => {
    const dispatched = await recordSaga(listSaga, {});
    expect(dispatched).toContainEqual(actions.listFailed());
  });

  it("should give character list", async () => {
    const response = await Api(
      ApiConstants.LOGIN,
      { email: "admin@marvel.com", password: "zaq1xsw2" },
      "POST"
    );
    const { tokenType, accessToken } = response.token;
    const token = `${tokenType} ${accessToken}`;
    const dispatched = await recordSaga(listSaga, { token });
    expect(dispatched[0].list.length).toBe(20);
  });
});
