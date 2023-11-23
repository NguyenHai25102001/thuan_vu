import React, { useState } from "react";
import Images from "../static";
import {
  GetCommentCommunityConfig,
  ItemPostCommunity,
  PostCommunity,
  TCommenPost,
  TItemVideoCommunity,
} from "../types/community.type";
import { API_URL_IMAGE } from "../constants/utils";
import { handleShare, showTimeAgo } from "../module";
import { useMutation, useQuery } from "@tanstack/react-query";
import communityApi from "../apis/postCommunity.apis";
import { useNavigate } from "react-router-dom";
import path from "../constants/path";
const NUMLIMIT = 103;
interface IProps {
  item: TItemVideoCommunity;
}
const ItemVideoBlog = (props: IProps) => {
  const navigate = useNavigate();
  const { item } = props;
  const [comment, setComment] = React.useState("");
  const [dataComment, setDataComment] = React.useState<TCommenPost[]>([]);
  const [page, setPage] = React.useState(1);
  const [lastPage, setLastPage] = React.useState(1);
  const [showListComment, setShowListComment] = React.useState(true);

  const [timer, setTimer] = React.useState(null);
  const [numberLike, setNumberLike] = React.useState(item?.number_like);
  const [isLike, setIsLike] = React.useState(item?.is_wishlist === 1);
  const ReadMore = ({ children }) => {
    if (children) {
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
    } else {
      return;
    }
  };
  const ReadMoreComment = ({ children }) => {
    if (children) {
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
    } else {
      return;
    }
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
  //
  const likeMutation = useMutation({
    mutationFn: () =>
      communityApi.likeCommunity({
        id: item.id,
        type: 2,
      }),
  });
  const [queryConfig, setQueryConfig] =
    React.useState<GetCommentCommunityConfig>({
      page: 1,
      type: 2,
      id: Number(item?.id),
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
  const commentMutation = useMutation({
    mutationFn: () =>
      communityApi.commentPost({
        id: item?.id,
        type: 2, //1 bai  viet 2 video
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
      <div
        className="relative flex items-center justify-center"
        onClick={() =>
          navigate(path.playVideo, {
            state: {
              item,
            },
          })
        }
      >
        <img
          src={`${API_URL_IMAGE}${item?.poster}`}
          className="w-full h-40 object-cover rounded-md"
        />
        <img
          src={Images.iconPlay}
          className="w-14 h-14 object-contain absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50"
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
          {showTimeAgo(item?.created_at)}
        </p>
      </div>
      <p className="text-xs font-['Nunito'] mb-2 text-main w-full">
        {item?.category_name}
      </p>
      <ReadMore>{item?.content}</ReadMore>
      <div className="flex items-center w-full">
        <div className="py-2 pr-2">
          <img src={Images.iconHeart} className="w-6 h-5 object-contain" />
        </div>
        <p className="text-xs font-['Nunito'] text-[#828282] flex-1">
          {numberLike} Lượt yêu thích
        </p>
        {/* <p className="text-xs font-['Nunito'] text-[#828282]">
          {item?.number_comment} bình luận
        </p> */}
      </div>
      <div className="flex items-center justify-between w-full border-t border-t-[#f5f5f5] border-b border-b-[#f5f5f5]">
        <div
          className="py-2 flex items-center justify-start flex-1"
          onClick={onClickLikeButton}
        >
          {isLike ? (
            <img src={Images.iconHeart} className="w-4 h-4 object-contain" />
          ) : (
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none">
              <path
                d="M8.26988 1.84355C7.45268 1.09213 6.38304 0.675084 5.27288 0.675049C4.68529 0.675661 4.10361 0.792468 3.56134 1.01875C3.01906 1.24503 2.52688 1.57632 2.11313 1.99355C0.348383 3.7658 0.349133 6.5378 2.11463 8.30255L7.61363 13.8015C7.74113 14.0258 7.98713 14.1705 8.26988 14.1705C8.38598 14.1694 8.5002 14.1411 8.60336 14.0878C8.70652 14.0345 8.79575 13.9578 8.86388 13.8638L14.4251 8.30255C16.1906 6.53705 16.1906 3.7658 14.4236 1.99055C14.0101 1.57409 13.5183 1.24347 12.9766 1.01771C12.4348 0.791951 11.8538 0.675499 11.2669 0.675049C10.1568 0.67523 9.08716 1.09225 8.26988 1.84355ZM13.3631 3.05105C14.5354 4.2293 14.5361 6.0698 13.3646 7.24205L8.26988 12.3368L3.17513 7.24205C2.00363 6.0698 2.00438 4.2293 3.17363 3.05405C3.74363 2.48705 4.48913 2.17505 5.27288 2.17505C6.05663 2.17505 6.79913 2.48705 7.36463 3.05255L7.73963 3.42755C7.80922 3.49726 7.89188 3.55256 7.98286 3.59029C8.07385 3.62803 8.17138 3.64745 8.26988 3.64745C8.36838 3.64745 8.46592 3.62803 8.5569 3.59029C8.64789 3.55256 8.73054 3.49726 8.80013 3.42755L9.17513 3.05255C10.3091 1.9208 12.2306 1.9238 13.3631 3.05105Z"
                fill="#828282"
              />
            </svg>
          )}

          <span className="text-xs font-['Nunito'] ml-2 font-semibold  text-[#828282]">
            {isLike ? "Đã yêu thích" : "Yêu thích"}
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
          onClick={() => handleShare(`${API_URL_IMAGE}${item?.poster}`)}
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
                    style={
                      {
                        // borderBottomWidth: 2,
                        // borderBottomColor: "#dbdbdb",
                      }
                    }
                  >
                    <img
                      src={el.user_avatar ? el.user_avatar : Images.iconBaby}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <div className="bg-[#EBEBEB] bg-opacity-30 py-1 px-2 rounded">
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
        <img src={Images.iconBaby} className="w-8 h-8 object-cover mr-2 my-1" />
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
export default ItemVideoBlog;
