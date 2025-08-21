import React, { FC, useState, useMemo, useEffect } from 'react';
import {
    StyledPaginationContainer,
    StyledPaginationList,
    PageButton,
    ActivePageButton,
    DotsText,
} from './style';

interface Props {
    totalItems: number;
    itemsPerPage: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
}

export const Paginator: FC<Props> = ({
    totalItems,
    itemsPerPage,
    onPageChange,
    siblingCount = 1,
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const changePage = (page: number) => {
        const newPage = Math.max(1, Math.min(page, totalPages));
        setCurrentPage(newPage);
        onPageChange(newPage);
    };

    useEffect(() => {
        if (currentPage > totalPages) {
            changePage(totalPages);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalPages]);

    const paginationRange = useMemo<(number | 'DOTS')[]>(() => {
        const totalNumbers = siblingCount * 2 + 5;
        if (totalNumbers >= totalPages) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        };

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPages - 1;

        const pages: (number | 'DOTS')[] = [];

        if (!shouldShowLeftDots && shouldShowRightDots) {
            // cerca del inicio
            const leftItemCount = 3 + 2 * siblingCount;
            for (let i = 1; i <= leftItemCount; i++) pages.push(i);
            pages.push('DOTS');
            pages.push(totalPages);
        } else if (shouldShowLeftDots && !shouldShowRightDots) {
            // cerca del final
            pages.push(1);
            pages.push('DOTS');
            const rightItemCount = 3 + 2 * siblingCount;
            for (let i = totalPages - rightItemCount + 1; i <= totalPages; i++) pages.push(i);
        } else if (shouldShowLeftDots && shouldShowRightDots) {
            // en medio
            pages.push(1);
            pages.push('DOTS');
            for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) pages.push(i);
            pages.push('DOTS');
            pages.push(totalPages);
        }

        return pages;
    }, [totalPages, siblingCount, currentPage]);

    return (
        <StyledPaginationContainer>
            <StyledPaginationList>
                <PageButton
                    onClick={() => changePage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Prev
                </PageButton>

                {paginationRange.map((item, idx) =>
                    item === 'DOTS' ? (
                        <DotsText key={idx}>...</DotsText>
                    ) : item === currentPage ? (
                        <ActivePageButton key={idx} onClick={() => changePage(item)}>
                            {item}
                        </ActivePageButton>
                    ) : (
                        <PageButton key={idx} onClick={() => changePage(item)}>
                            {item}
                        </PageButton>
                    )
                )}

                <PageButton
                    onClick={() => changePage(currentPage + 1)}
                    disabled={currentPage === totalPages}>
                    Next
                </PageButton>
            </StyledPaginationList>
        </StyledPaginationContainer>
    );
};
