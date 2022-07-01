import { FC } from 'react';
import styles from '../Post.module.sass';
import { CardContent, CardMedia } from '@mui/material';
import Link from 'src/components/common/links/link/Link';
import Title from 'src/components/common/title/Title';
import { TitleSizes, TextSizes } from 'src/models/common/typography';
import { getUrl, loadImgUrl, TypeUrl } from 'src/utils';
import Embed from 'src/components/common/Embed';
import SeeMore from 'src/components/common/links/see-more/SeeMore';
import Text from 'src/components/common/text/Text';
import { useResponsiveSize } from 'src/components/responsive/ResponsiveContext';
import PostInfo from '../PostInfo';
import { useSelectPost } from 'src/store/app/hooks';
import ButtonVotes from '../../../common/button/buttons-vote/ButtonVotes';
import {
  PostWithSomeDetails,
  ReactionEnum,
} from '@subsocial/types/dto';


const PostContent: FC<any> = (props) => {
  const { isMobile, isDesktop,isTablet } = useResponsiveSize();
  const { post, space, profile } = props;
  const { rootPostId, isSharedPost } = post.struct;
  const postData = useSelectPost(rootPostId) as PostWithSomeDetails;

  return (
    <div>   {/*className={styles.mainPostContent}*/}
      
      <div>  {/* className={styles.postContent}*/}
       {/* <PostInfo profile={profile} post={post} space={space} />  */}
        { /*post.content.title && (
          <Link
            href={getUrl({
              type: TypeUrl.Post,
              title: space?.content.handle,
              id: space?.id,
              subTitle: post.content.title,
              subId: post.id,
            })}
          >
            <Title type={TitleSizes.PREVIEW} className={styles.title}>
              {post.content.title}
            </Title>
          </Link>
          ) */}

        {post.content.link && (
          <Embed link={post.content.link} className={styles.embed} />
        )}

         { /* post.content.summary && (
          <Text type={TextSizes.NORMAL} className={styles.content}>
            {post.content.summary}{' '}
            {post.content.isShowMore && (
              <SeeMore
                href={getUrl({
                  type: TypeUrl.Post,
                  title: space?.content.handle,
                  id: space?.id,
                  subTitle: post.content.title,
                  subId: post.struct.id,
                })}
              />
            )}
          </Text>
              ) */} 

        {isMobile && post.content.image && post.content.summary && (
          <div className={styles.mainPostContentMobile}>
          <Link
         href={getUrl({
           type: TypeUrl.Post,
           title: space?.content.handle,
           id: space?.id,
           subTitle: post.content.title,
           subId: post.struct.id,
         })}
         image
       >
        <img src={loadImgUrl(post.content.image)} alt={post.content.title}  className={styles.imgContentDesktop}/>
  
       </Link>
       <div style={{width: "95%", display: "flex", justifyContent: "space-between", alignItems: "center", padding : "3px"}}>
       <a className={styles.spaceLink}
                     href={getUrl({
                       type: TypeUrl.Space,
                       //@ts-ignore
                       title: space?.content?.handle || postData?.space?.content?.handle,
                       id: space?.struct.id || postData?.space?.struct.id,
                     })}
                   >
                     {space?.content?.name || postData?.space?.content?.name}
                   </a>
                   <ButtonVotes post={post.struct} reactionEnum={ReactionEnum.Upvote} />
       </div>
       </div>
                    
          )}
        
       {/*DESKTOP_VIEW  */}
        {/*card  title */}
        { isDesktop  && post.content.image && post.content.summary && (
        <div className={styles.mainPostContentDesktop}>
           <Link
          href={getUrl({
            type: TypeUrl.Post,
            title: space?.content.handle,
            id: space?.id,
            subTitle: post.content.title,
            subId: post.struct.id,
          })}
          image
        >
         <img src={loadImgUrl(post.content.image)} alt={post.content.title}  className={styles.imgContentDesktop}/>
  
        </Link>
        <div className={styles.mainPostFooterDesktop}>
        <a className={styles.spaceLink}
                      href={getUrl({
                        type: TypeUrl.Space,
                        //@ts-ignore
                        title: space?.content?.handle || postData?.space?.content?.handle,
                        id: space?.struct.id || postData?.space?.struct.id,
                      })}
                    >
                      {space?.content?.name || postData?.space?.content?.name}
                    </a>
                    <ButtonVotes post={post.struct} reactionEnum={ReactionEnum.Upvote} />
        </div>
        </div>
        )}
      </div>
      {/*TABLET_VIEW  */}

   {isTablet && post.content.image && post.content.summary && (
        <div className={styles.mainPostContentTablet}>
        <Link
       href={getUrl({
         type: TypeUrl.Post,
         title: space?.content.handle,
         id: space?.id,
         subTitle: post.content.title,
         subId: post.struct.id,
       })}
       image
     >
      <img src={loadImgUrl(post.content.image)} alt={post.content.title}  className={styles.imgContentDesktop}/>

     </Link>
     <div className={styles.mainPostFooterDesktop}>
     <a className={styles.spaceLink}
                   href={getUrl({
                     type: TypeUrl.Space,
                     //@ts-ignore
                     title: space?.content?.handle || postData?.space?.content?.handle,
                     id: space?.struct.id || postData?.space?.struct.id,
                   })}
                 >
                   {space?.content?.name || postData?.space?.content?.name}
                 </a>
                 <ButtonVotes post={post.struct} reactionEnum={ReactionEnum.Upvote} />
     </div>
     </div>
                  
        )}
      
     {/*DESKTOP_VIEW  */}
      {/*card  title */}
      { isDesktop  && post.content.image && post.content.summary && (
      <div className={styles.mainPostContentDesktop}>
         <Link
        href={getUrl({
          type: TypeUrl.Post,
          title: space?.content.handle,
          id: space?.id,
          subTitle: post.content.title,
          subId: post.struct.id,
        })}
        image
      >
       <img src={loadImgUrl(post.content.image)} alt={post.content.title}  className={styles.imgContentDesktop}/>

      </Link>
      <div style={{width: "95%", display: "flex", justifyContent: "space-between", alignItems: "center", padding : "3px"}}>
      <a className={styles.spaceLink}
                    href={getUrl({
                      type: TypeUrl.Space,
                      //@ts-ignore
                      title: space?.content?.handle || postData?.space?.content?.handle,
                      id: space?.struct.id || postData?.space?.struct.id,
                    })}
                  >
                    {space?.content?.name || postData?.space?.content?.name}
                  </a>
                  <ButtonVotes post={post.struct} reactionEnum={ReactionEnum.Upvote} />
      </div>
      </div>
    )} 
              
               </div>        
 
    
  );
  
};

export default PostContent;
