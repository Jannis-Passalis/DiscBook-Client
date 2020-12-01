import {
  addCds,
  AddCdToDb,
  ADD_CDS,
  DeleteCdFromDb,
  deleteCdFromStore,
  DELETE_CD,
  fetchCds,
  updateForSale,
  UPDATE_FOR_SALE,
  ChangeSellingOption,
  sendEmail,
} from "../actions";
import axios from "axios";

jest.mock("axios");

describe("#cdActionsWithType", () => {
  describe("addcds return", () => {
    test("should return an action object", () => {
      const cds = [{}, {}];
      const expected = {
        type: ADD_CDS,
        payload: cds,
      };
      const action = addCds(cds);
      expect(action).toEqual(expected);
    });
  }),
    describe("deletecd return", () => {
      test("should return an cd id", () => {
        const cdId = 2;
        const expected = {
          type: DELETE_CD,
          payload: 2,
        };
        const action = deleteCdFromStore(cdId);
        expect(action).toEqual(expected);
      });
    }),
    describe("updatecd return", () => {
      test("should return an cd object", () => {
        const cdId = {};
        const expected = {
          type: UPDATE_FOR_SALE,
          payload: {},
        };
        const action = updateForSale(cdId);
        expect(action).toEqual(expected);
      });
    });
});

describe("#cdActionsWithRequest", () => {
  describe("fetchcds return", () => {
    test("should return an array of objects", async () => {
      const cdRes = [{}, {}];
      const response = { data: cdRes };
      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      const dispatch = jest.fn();
      await fetchCds(dispatch);
      expect(dispatch).toHaveBeenCalledWith(addCds(cdRes));
    });
  }),
    describe("addcdstodb return", () => {
      test("should return a 3 parameters", async () => {
        const response = { message: "hi" };
        axios.get.mockImplementationOnce(() => Promise.resolve(response));
        const dispatch = jest.fn();
        await AddCdToDb()(dispatch);
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
    }),
    describe("deletecdfromdb return", () => {
      test("should return an id number and 3 parameters", async () => {
        const response = { message: "hi" };
        axios.get.mockImplementationOnce(() => Promise.resolve(response));
        const dispatch = jest.fn();
        const cdId = 1;
        await DeleteCdFromDb(cdId)(dispatch);
        expect(dispatch).toHaveBeenCalledWith(deleteCdFromStore(cdId));
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
    }),
    describe("updateforsale return", () => {
      test("should return a cd object", async () => {
        const findCd = { title: "hallo" };
        const response = { data: findCd };
        axios.patch.mockImplementationOnce(() => Promise.resolve(response));
        const dispatch = jest.fn();
        await ChangeSellingOption()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(
          updateForSale(response.data.findCd)
        );
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
    }),
    describe("send email return", () => {
      test("should return a 3 parameters", async () => {
        const response = { message: "hi" };
        axios.post.mockImplementationOnce(() => Promise.resolve(response));
        const dispatch = jest.fn();
        await sendEmail()(dispatch);
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
    });
});
