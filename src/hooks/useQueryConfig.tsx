import { isUndefined, omitBy } from "lodash";
import useQueryParams from "./useQueryParams";
import { QuerryConfigCommunity } from "../pages/community/postTab";

export default function UseQueryConfig() {
  const queryParams: QuerryConfigCommunity = useQueryParams();
  const queryConfig: QuerryConfigCommunity = omitBy(
    {
      page: queryParams.page || "1",
    },
    isUndefined
  );
  return queryConfig;
}
