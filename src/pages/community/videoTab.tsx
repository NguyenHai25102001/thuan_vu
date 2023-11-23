import React from "react";
// import ItemVideoBlog from "../../components/itemVideoBlog";
import { Page } from "zmp-ui";
import { useQuery } from "@tanstack/react-query";
import communityApi from "../../apis/postCommunity.apis";
import {
  ItemPostCommunity,
  PostCommunityConfig,
  TItemVideoCommunity,
} from "../../types/community.type";
import ItemVideoBlog from "../../components/itemVideoBlog";

const VideoTab = ({ choose }: { choose: number }) => {
  const [dataVideoCommunity, setDataVideoCommunity] = React.useState<
    TItemVideoCommunity[]
  >([]);
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastpage] = React.useState(1);
  const [isLoadMore, setIsLoadMore] = React.useState(false);
  const listInnerRef = React.useRef(null);
  const [queryParams, setQueryParam] = React.useState<PostCommunityConfig>({
    page: 1,
  });
  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (Math.ceil(scrollTop) + clientHeight === scrollHeight) {
        loadmore();
      }
    }
  };
  const { data, isLoading } = useQuery({
    queryKey: ["videoCommunity", queryParams],
    queryFn: () => {
      return communityApi.getVideoBlog(queryParams as PostCommunityConfig);
    },
    onSuccess: (data) => {
      setDataVideoCommunity([...dataVideoCommunity, ...data.data.data.data]);
      setLastpage(data.data.data.last_page);
      setIsLoadMore(false);
    },
    onError: (e) => {
      console.log(e);
      setIsLoadMore(false);
    },
  });

  const loadmore = () => {
    if (page >= lastPage) {
      return;
    } else {
      setIsLoadMore(true);
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
      {!!dataVideoCommunity &&
        !!dataVideoCommunity.length &&
        dataVideoCommunity.map((item, index) => {
          return (
            <div key={item.id}>
              <ItemVideoBlog item={item} />
            </div>
          );
        })}
      {isLoadMore && <div className="spin-loading" />}
    </Page>
  );
};
export default VideoTab;
