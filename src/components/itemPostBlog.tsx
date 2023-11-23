import React, { useContext, useState } from "react";
import Images from "../static";
import {
  GetCommentCommunityConfig,
  ItemPostCommunity,
  PostCommunity,
  TCommenPost,
} from "../types/community.type";
import { API_URL_IMAGE } from "../constants/utils";
import { handleShare, showTimeAgo } from "../module";
import { useMutation, useQuery } from "@tanstack/react-query";

import communityApi from "../apis/postCommunity.apis";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../contexts/app.context";
const NUMLIMIT = 103;
interface IProps {
  item: ItemPostCommunity;
}
const ItemPostBlog = (props: IProps) => {
  const { item } = props;

  const [comment, setComment] = React.useState("");
  const [dataComment, setDataComment] = React.useState<TCommenPost[]>([]);
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(1);
  const [showListComment, setShowListComment] = React.useState(true);
  const { selectedBaby } = useContext(AppContext);
  const [timer, setTimer] = React.useState(null);
  const [numberLike, setNumberLike] = React.useState(item.number_like);
  const [isLike, setIsLike] = React.useState(item.is_wishlist === 1);
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(text.length > NUMLIMIT);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p
        className="text-xs font-['Nunito'] font-semibold leading-[20px] text-[#333333]"
        onClick={toggleReadMore}
      >
        {text.length < NUMLIMIT
          ? text
          : isReadMore
          ? text.slice(0, NUMLIMIT)
          : text}
        {isReadMore && (
          <span className="text-xs font-['Nunito']  text-main">
            ...Xem thêm &#62;&#62;
          </span>
        )}
      </p>
    );
  };
  const ReadMoreComment = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(text.length > NUMLIMIT);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p
        className="text-sm font-['Nunito'] text-[#828282]"
        onClick={toggleReadMore}
      >
        {text.length < NUMLIMIT
          ? text
          : isReadMore
          ? text.slice(0, NUMLIMIT)
          : text}
        {isReadMore && (
          <span className="text-xs font-['Nunito']  text-main">
            ...Xem thêm &#62;&#62;
          </span>
        )}
      </p>
    );
  };
  const onClickLikeButton = () => {
    let newTimer = timer;
    if (newTimer) {
      clearTimeout(newTimer);
    }
    newTimer = setTimeout(() => {
      likeMutation.mutate();
    }, 700);
    setIsLike(!isLike);
    setNumberLike((prev) => (isLike ? prev - 1 : prev + 1));
  };
  const [queryConfig, setQueryConfig] =
    React.useState<GetCommentCommunityConfig>({
      page: 1,
      type: 1,
      id: item.id,
    });

  const getDataComment = async () => {
    try {
      setPage(1);
      const res = await communityApi.getCommentBlog(queryConfig);
      if (res.data.status === 1) {
        setDataComment(res.data.data.data);
        setLastPage(res.data.data.last_page);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const loadmore = async () => {
    if (page >= lastPage) {
      return;
    } else {
      try {
        let currentPage = page + 1;
        setPage(currentPage);
        const res = await communityApi.getCommentBlog({
          ...queryConfig,
          page: currentPage,
        });
        if (res.data.status === 1) {
          setDataComment([...dataComment, ...res.data.data.data]);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const likeMutation = useMutation({
    mutationFn: () =>
      communityApi.likeCommunity({
        id: item.id,
        type: 1,
      }),
    onSuccess: (res) => {},
    onError: (e) => {
      console.log("error like", e);
    },
  });
  const commentMutation = useMutation({
    mutationFn: () =>
      communityApi.commentPost({
        id: item.id,
        type: 1,
        comment: comment,
      }),

    onSuccess: (data) => {
      getDataComment();
      setComment("");
    },
    onError: (e) => {
      console.log("error comment", e);
      setComment("");
    },
  });
  const handelComment = () => {
    if (!comment || comment === "") {
      return;
    }
    commentMutation.mutate();
  };
  React.useEffect(() => {
    getDataComment();
  }, []);

  return (
    <div className="p-2 border-b-8 border-b-[#EFEFEF]">
      <div className="relative flex items-center justify-center">
        <img
          src={`${API_URL_IMAGE}${item.img[0]?.url_image}`}
          className="w-full h-auto object-cover rounded"
        />
      </div>
      <div className="flex items-center my-2">
        <img
          src={`${item?.user_avatar}`}
          className="w-8 h-8 object-cover rounded-full"
        />
        <p className="text-xs font-['Nunito'] mx-2 text-[#828282] line-clamp-1 flex-1">
          {/* {item.} */}
          {item?.user_name}
        </p>
        <p className="text-xs font-['Nunito'] text-[#828282]">
          {showTimeAgo(item.created_at)}
        </p>
      </div>
      <p className="text-xs font-['Nunito'] mb-2 text-main w-full">
        {item.category_name}
      </p>
      <ReadMore>{item.content}</ReadMore>
      <div className="flex items-center w-full">
        <div className="py-2 pr-2">
          <img src={Images.iconLike} className="w-6 h-5 object-contain" />
        </div>
        <p className="text-xs font-['Nunito']  text-[#828282] flex-1">
          {numberLike} Lượt thích
        </p>
        {/* <p className="text-xs font-['Nunito'] text-[#828282]">
          {item.number_comment} bình luận
        </p> */}
      </div>
      <div className="flex items-center justify-between w-full border-t border-t-[#f5f5f5] border-b border-b-[#f5f5f5]">
        <div
          className="py-2 flex items-center justify-start flex-1"
          onClick={onClickLikeButton}
        >
          {isLike ? (
            <img src={Images.iconLike} className="w-4 h-4 object-contain" />
          ) : (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M15 6H10.791L11.6332 3.47475C11.7847 3.01875 11.7083 2.51325 11.427 2.12325C11.1458 1.73325 10.6898 1.5 10.209 1.5H9C8.77725 1.5 8.5665 1.599 8.42325 1.77L4.89825 6H3C2.17275 6 1.5 6.67275 1.5 7.5V14.25C1.5 15.0773 2.17275 15.75 3 15.75H12.9802C13.2854 15.749 13.5831 15.6554 13.8339 15.4816C14.0847 15.3077 14.2769 15.0619 14.385 14.7765L16.4528 9.26325C16.4841 9.17904 16.5001 9.08987 16.5 9V7.5C16.5 6.67275 15.8273 6 15 6ZM3 7.5H4.5V14.25H3V7.5ZM15 8.86425L12.9802 14.25H6V7.0215L9.351 3H10.2105L9.039 6.51225C9.00097 6.62499 8.99036 6.74516 9.00806 6.86282C9.02575 6.98048 9.07124 7.09222 9.14075 7.18878C9.21025 7.28535 9.30178 7.36395 9.40774 7.41807C9.51369 7.4722 9.63102 7.50028 9.75 7.5H15V8.86425Z"
                fill="#828282"
              />
            </svg>
          )}

          <span className="text-xs font-['Nunito'] ml-2 font-semibold  text-[#828282]">
            {isLike ? "Đã thích" : "Thích"}
          </span>
        </div>
        <div
          className="py-2 flex items-center flex-1 justify-center"
          onClick={() => setShowListComment((prev) => !prev)}
        >
          <img
            src={Images.iconComment}
            className="w-5 h-5 object-contain mr-2"
          />
          <span className="text-xs font-['Nunito'] font-semibold  text-[#828282]">
            Bình luận
          </span>
        </div>
        <div
          className="py-2 flex items-center flex-1 justify-end"
          onClick={() =>
            handleShare(`${API_URL_IMAGE}${item.img[0]?.url_image}`)
          }
        >
          <img src={Images.iconShare} className="w-5 h-5 object-contain mr-2" />
          <span className="text-xs font-['Nunito'] font-semibold  text-[#828282]">
            Chia sẻ
          </span>
        </div>
      </div>
      {/* list bình luận  */}
      {showListComment && (
        <div>
          <div>
            {!!dataComment &&
              !!dataComment.length &&
              dataComment.map((el, i) => {
                return (
                  <div
                    key={i}
                    className="flex items-start py-2"
                    style={{
                      borderBottomWidth: 2,
                      borderBottomColor: "#dbdbdb",
                    }}
                  >
                    <img
                      src={el.user_avatar ? el.user_avatar : Images.iconBaby}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div className="bg-[#EBEBEB] py-1 px-2 rounded">
                      <span className="text-xs font-['Nunito'] font-bold  text-[#333333]">
                        {el.user_name}
                      </span>
                      <ReadMoreComment>{el.comment}</ReadMoreComment>
                    </div>
                  </div>
                );
              })}
          </div>
          {page < lastPage && (
            <div className="w-full flex items-center justify-between">
              <div className="mx-auto py-2 flex items-end" onClick={loadmore}>
                <p className="text-center text-sm font-bold text-main">
                  Xem thêm bình luận
                </p>
                <svg width="24" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7.41 8.57999L12 13.17L16.59 8.57999L18 9.99999L12 16L6 9.99999L7.41 8.57999Z"
                    fill="#e9636e"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="flex w-full items-center pt-2">
        <img
          src={selectedBaby?.image ? selectedBaby.image : Images.iconBaby}
          className="w-8 h-8 object-cover mr-2 my-1 rounded-full"
        />
        <div className=" flex-1 flex items-center rounded-full h-9 bg-[#EBEBEB]">
          <input
            type="text"
            className="flex-1 h-9 outline-none border-0 bg-[#EBEBEB] px-2 py-0 rounded-l-full"
            placeholder="Viết bình luận..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div
            onClick={() => handelComment()}
            className="pr-2 px-3rouded-r-full h-9 flex items-center justify-center"
          >
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ItemPostBlog;
