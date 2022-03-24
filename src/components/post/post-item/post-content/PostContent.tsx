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
    <div className={styles.mainPostContent}>
      <div className={styles.postContent}>
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
            <CardMedia
              component="img"
              className={styles.imgContentMobile}
              image={loadImgUrl(post.content.image)}
              alt={post.content.title}
           
            />
            {/* card footer img-view  */}
             {/*card  title */}
      <div style={{ paddingLeft: "5px", paddingRight: "5px", width: "100%", paddingTop: "2px", display: "flex", justifyContent: "space-between",
        alignItems: "flex-end", 
    }}>
      {post.content.title && (
          <Link
            href={getUrl({
              type: TypeUrl.Post,
              title: space?.content.handle,
              id: space?.id,
              subTitle: post.content.title,
              subId: post.id,
            })}
          >
            <p className={styles.title}>
              {post.content.title}
            </p>
          </Link>
        )}
  
        {/*spcae name */}
          
        <a className={styles.spaceLink}
                    href={getUrl({
                      type: TypeUrl.Space,
                      //@ts-ignore
                      title: space?.content?.handle || postData?.space?.content?.handle,
                      id: space?.struct.id || postData?.space?.struct.id,
                    })}
                  >
                    {space?.content?.name || postData?.space?.content?.name}
                  </a>  </div>

                  </Link>
          </div>
        )}
      </div>
      {/*TABLET_VIEW  */}

   {isTablet && post.content.image && post.content.summary && (
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
            <CardMedia
              component="img"
              className={styles.imgContentMobile}
              image={loadImgUrl(post.content.image)}
              alt={post.content.title}
           
            />
            {/* card footer img-view  */}
             {/*card  title */}
      <div style={{ paddingLeft: "5px", paddingRight: "5px", width: "100%", paddingTop: "2px", display: "flex", justifyContent: "space-between",
        alignItems: "flex-end", 
    }}>
      {post.content.title && (
          <Link
            href={getUrl({
              type: TypeUrl.Post,
              title: space?.content.handle,
              id: space?.id,
              subTitle: post.content.title,
              subId: post.id,
            })}
          >
            <p className={styles.title}>
              {post.content.title}
            </p>
          </Link>
        )}
  
        {/*spcae name */}
          
        <a className={styles.spaceLink}
                    href={getUrl({
                      type: TypeUrl.Space,
                      //@ts-ignore
                      title: space?.content?.handle || postData?.space?.content?.handle,
                      id: space?.struct.id || postData?.space?.struct.id,
                    })}
                  >
                    {space?.content?.name || postData?.space?.content?.name}
                  </a>  </div>

                  </Link>
          </div>
        )}
      
     {/*DESKTOP_VIEW  */}
      {/*card  title */}
      { isDesktop  && post.content.image && post.content.summary && (
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
        <CardMedia
          component="img"
          className={styles.imgContentDesktop}
          image={loadImgUrl(post.content.image)}
          alt={post.content.title}
        />
     
      <div style={{ paddingLeft: "5px", paddingRight: "5px", width: "100%", paddingTop: "2px", display: "flex", justifyContent: "space-between",
        alignItems: "flex-end", paddingBottom: "10px"
    }}>
      {post.content.title && (
          <Link
            href={getUrl({
              type: TypeUrl.Post,
              title: space?.content.handle,
              id: space?.id,
              subTitle: post.content.title,
              subId: post.id,
            })}
          >
            <p className={styles.title}>
              {post.content.title}
            </p>
          </Link>
        )}
  
        {/*spcae name */}
          
        <a className={styles.spaceLink}
                    href={getUrl({
                      type: TypeUrl.Space,
                      //@ts-ignore
                      title: space?.content?.handle || postData?.space?.content?.handle,
                      id: space?.struct.id || postData?.space?.struct.id,
                    })}
                  >
                    {space?.content?.name || postData?.space?.content?.name}
                  </a>  </div>  </Link> )}
                  
    </div>
     
  );
};

export default PostContent;
