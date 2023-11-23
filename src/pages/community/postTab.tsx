import React from "react";
import ItemPostBlog from "../../components/itemPostBlog";
import { Page } from "zmp-ui";
import { useQuery } from "@tanstack/react-query";
import communityApi from "../../apis/postCommunity.apis";
import {
  ItemPostCommunity,
  PostCommunity,
  PostCommunityConfig,
} from "../../types/community.type";
import { useNavigate } from "react-router-dom";
export type QuerryConfigCommunity = {
  [key in keyof PostCommunityConfig]: string;
};
const PostTab = ({ choose }: { choose: number }) => {
  const [dataPostCommunity, setDataPostCommunity] = React.useState<
    ItemPostCommunity[]
  >([]);
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastpage] = React.useState(1);
  const listInnerRef = React.useRef(null);
  const navigate = useNavigate();
  const [queryParams, setQueryParam] = React.useState<PostCommunityConfig>({
    page: 1,
  });

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (scrollTop + clientHeight === scrollHeight) {
        loadmore();
      }
    }
  };
  const { data } = useQuery({
    queryKey: ["potstCommunity", queryParams],
    queryFn: () => {
      return communityApi.getPostCommunity(queryParams as PostCommunityConfig);
    },
    onSuccess: (data) => {
      setDataPostCommunity([...dataPostCommunity, ...data.data.data.data]);
      setLastpage(data.data.data.last_page);
    },
  });

  const loadmore = () => {
    if (page >= lastPage) {
      return;
    } else {
      let currentPage = page + 1;
      setPage(currentPage);
      setQueryParam({
        ...queryParams,
        page: currentPage,
      });
    }
  };

  return (
    <Page
      className="w-full h-full pb-60"
      hideScrollbar
      onScroll={onScroll}
      ref={listInnerRef}
    >
      {!!dataPostCommunity &&
        !!dataPostCommunity.length &&
        dataPostCommunity.map((item, index) => {
          return (
            <div key={item.id}>
              <ItemPostBlog item={item} />
            </div>
          );
        })}
    </Page>
  );
};
export default PostTab;
