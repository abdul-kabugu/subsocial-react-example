import React, { FC, useEffect, useState } from 'react';
import styles from './InfinityListScroll.module.sass';
import InfiniteScroll from 'react-infinite-scroll-component';
import { config } from 'src/config'
import { nonEmptyArr } from '@subsocial/utils';
import Loader from '../../common/loader/Loader';
import EmptyComponent from '../../common/empty/EmptyComponent';
import { DataListItemProps, InnerLoadMoreFn } from 'src/models/infinity-scroll';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import { useResponsiveSize } from 'src/components/responsive/ResponsiveContext';

interface InfinityPostList extends DataListItemProps {
  dataSource: string[];
  loadMore: InnerLoadMoreFn;
  totalCount: number;
  isEmpty?: boolean;
  emptyText: string;
}

const InfinityListScroll: FC<InfinityPostList> = ({
  dataSource,
  loadMore,
  totalCount,
  isEmpty,
  emptyText,
  renderItem,
}) => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState(dataSource.length > 0 ? dataSource : []);
  const { t } = useTranslation();
  const { isMobile, isDesktop, isTablet } = useResponsiveSize();

  const handleInfiniteOnLoad = async (page: number) => {
    const newData = page === 1 ? [] : await loadMore(page, config.infinityScrollOffset);
    setData((current: any) => [...current, ...newData]);
    setPage(page + 1);
  };

  const hasInitialData = nonEmptyArr(dataSource);

  useEffect(() => {
    setData(dataSource);
  }, [dataSource]);

  useEffect(() => {
    if (hasInitialData) return setPage(page + 1);
    handleInfiniteOnLoad(page);
  }, []);

  return (
    <InfiniteScroll
      dataLength={data.length}
      loader={<Loader label={t('content.loading')} />}
      next={() => handleInfiniteOnLoad(page)}
      hasMore={data.length < totalCount}
      className={styles.list}
    >
      {isMobile && (<Box sx={{ width: "100%", display: 'grid', gap: 1, gridTemplateColumns: 'repeat(1, 1fr)' }}>
        {!isEmpty ? (
          data.map((id: string) => renderItem(id))
        ) : (
          <EmptyComponent text={emptyText} />
        )}
      </Box>)}

      {/* TABLET  VIEW  */}
      {isTablet && (<Box sx={{ width: "100%", display: 'grid', gap: 1, gridTemplateColumns: 'repeat(2, 1fr)' }}>
        {!isEmpty ? (
          data.map((id: string) => renderItem(id))
        ) : (
          <EmptyComponent text={emptyText} />
        )}
      </Box>)}
      {/*DESKTOP VIEW*/}

      {isDesktop && (<Box sx={{ width: "1250px", display: "grid", gap: 1, gridTemplateColumns: 'repeat(3, 2fr)' }}>
        {!isEmpty ? (
          data.map((id: string) => renderItem(id))
        ) : (
          <EmptyComponent text={emptyText} />
        )}
      </Box>)}
    </InfiniteScroll>
  );
};


export default InfinityListScroll;

