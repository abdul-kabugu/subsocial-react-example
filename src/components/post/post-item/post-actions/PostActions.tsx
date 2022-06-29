import { FC } from 'react';
import { CardActions } from '@mui/material';
import ButtonComment from '../../../common/button/button-comment/ButtonComment';
import ButtonShare from '../../../common/button/button-share/ButtonShare';
import { PostActionsProps } from 'src/models/post';
import styles from '../Post.module.sass';
import ButtonVotes from '../../../common/button/buttons-vote/ButtonVotes';
import { ReactionEnum } from '@subsocial/types/dto';
import { useModal } from 'src/hooks/useModal';
import ModalCreateSharedPost from 'src/components/modal/modal-create-shared-post/ModalCreateSharedPost';
import { useAuth } from 'src/components/auth/AuthContext';
import { ACCOUNT_STATUS } from 'src/models/auth';
import { getUrl, loadImgUrl, TypeUrl } from 'src/utils';
import { useSelectPost } from 'src/store/app/hooks';
import {
  PostWithSomeDetails,
  
} from '@subsocial/types/dto';

const PostActions: FC<PostActionsProps> = (props : any) => {
  const { post, space, isSharedPost = 0 } = props;
  //const { post, space, profile } = props;
  const { rootPostId} = post.struct;
  const postData = useSelectPost(rootPostId) as PostWithSomeDetails;

  const { visibleRepliesCount, sharesCount } = post.struct
  const { isVisible, toggleModal } = useModal();

  const { openSingInModal, status } = useAuth();

  const isAuthRequired = status !== ACCOUNT_STATUS.AUTHORIZED;

  const onClickShare = () => {
    if (isAuthRequired) {
      openSingInModal(true);
      return openSingInModal(false);
    } else {
      toggleModal();
    }
  }

  const className = isSharedPost
    ? `${styles.sharedPost} ${styles.actions}`
    : styles.actions;

  return (
    <>
      <ModalCreateSharedPost
        postId={post.id}
        open={isVisible}
        onClose={toggleModal}
      />
      <CardActions className={className}>
      
        <ButtonVotes post={post.struct} reactionEnum={ReactionEnum.Upvote} />
          {/* DOWN VOTE BTN */}
     {/*   <ButtonVotes post={post.struct} reactionEnum={ReactionEnum.Downvote} />*/}
        
           {/* COMMENT BTN */}
       {/* <ButtonComment
          onClick={props.toggleComments}
          value={visibleRepliesCount}
  />  */}
     {/* SHARE BTN */}
      {/*  <ButtonShare
          onClick={onClickShare}
          value={sharesCount}
/>*/}
      </CardActions>
    </>
  );
};

export default PostActions;
