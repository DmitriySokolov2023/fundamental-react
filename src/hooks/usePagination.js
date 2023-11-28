import React, {useMemo} from 'react';

export const usePagination = (totalPages) => {
    return useMemo(() => {
        let pages = []
        for (let i = 0; i < totalPages; i++) {
            pages.push(i+1)
        }
        console.log(pages)
        return pages
    }, [totalPages]);
};
