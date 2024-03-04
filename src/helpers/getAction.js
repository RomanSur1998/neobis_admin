import {
  branchesSearch,
  employersSearch,
  menuSearch,
  stockSearch,
} from "../redux/actions/DataActions";

export const getAction = {
  "/menu": menuSearch,
  "/stock": stockSearch,
  "/branches": branchesSearch,
  "/employers": employersSearch,
};
