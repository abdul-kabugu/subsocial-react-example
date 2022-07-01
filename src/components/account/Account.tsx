import React, { FC } from 'react';
import CardWrapper from '../common/card-wrapper/CardWrapper';
import AvatarElement from '../common/avatar/AvatarElement';
import { AvatarSizes } from '../../models/common/avatar';
import Title from '../common/title/Title';
import { TitleSizes } from '../../models/common/typography';
import styles from './Account.module.sass';
import FollowersBlock from './followers-block/FollowersBlock';
import { CardActions, CardContent, CardHeader, Divider } from '@mui/material';
import IconLink from '../common/links/icon-link/IconLink';
import TagList from '../common/tag/TagList';
import Image from '../common/image/Image';
import Address from '../common/address/Address';
import Balance from '../common/balance/Balance';
import { AccountProps } from '../../models/account';
import { AccountDescription } from './AccountDescription';
import ProfileFollowers from '../common/profile-followers/ProfileFollowers';

const Account: FC<AccountProps> = (props) => {
 
    return (
        <div className={styles.accountBox}>
          <div className={styles.accountBoxHeader}>
            <div className={styles.avatarContainer}>  {
          <AvatarElement
            src={props.avatar}
            size={AvatarSizes.HUGEST}
            id={props.id}
          />
        } </div>
        <div className={styles.nameContainer}>
           {
          <h4 className={styles.title}>
            {props.name}
          </h4>
        }
          <AccountDescription
        about={props.about}
        summary={props.summary}
        isShowMore={props.isShowMore}
      />
        </div>
        <div style={{marginBottom: "8px"}}>
        {
          props.followingCount === undefined ? (
            <FollowersBlock
              followers={props.followersCount}
              posts={props.posts}
              id={props.id}
            />
          ) : (
            <ProfileFollowers
              className={styles.followers}
              following={props.followingCount}
              followers={props.followersCount}
              accountId={props.id}
            />
          )
        }
      
        </div>
        <div>
        {props.links && props.links?.length > 0 && (
        <CardActions className={`${styles.cardAction} ${styles.spaceIcon}`}>
          {props.links.map((link) => (
            <IconLink link={link as string} key={link as string} />
          ))}
        </CardActions>
      )}
        </div>
        <div className={styles.balanceCardContainer}>
          {props.withBalance && (
        <CardContent className={styles.accountBalanceInfo}>
          <div className={styles.accountWallet}>
            <Image src={'/wallet.jpg'} width={24} height={24} alt={'wallet'} />
            <Address label={props.id} size={'lg'} isCopy isQr />
          </div>

          <Balance address={props.id} isIcon className={styles.balance} />
        </CardContent>
      )}
          </div>
          <div style={{width: "100%",}}>
          {props.buttons && (
            <CardWrapper>
        <CardActions
          className={`${styles.cardAction} ${styles.accountButtons}`}
        >
          {props.buttons}
        </CardActions>

        {props.tabs && (
        <>
          <Divider variant="middle" />
          {props.tabs}
        </>
      )}
        </CardWrapper>
      )}  
          </div>
         
          </div>
        
          <div className={styles.accountBoxSubHeader}></div>
          <div className={styles.accountBoxFooter}></div>
    </div> 
  )
};

export default Account;
