import React, { FC, useState } from 'react';
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

    // Change page, asegura que no se salga de los límites
    const changePage = (page: number) => {
        const newPage = Math.max(1, Math.min(page, totalPages));
        setCurrentPage(newPage);
        onPageChange(newPage);
    };

    // botones prev y next
    const goToPrevPage = () => {
        changePage(currentPage - 1);
    };

    const goToNextPage = () => {
        changePage(currentPage + 1);
    };

    const paginationRange = (): (number | 'DOTS')[] => {
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
            pages.push('DOTS', totalPages);
        } else if (shouldShowLeftDots && !shouldShowRightDots) {
            // cerca del final
            pages.push(1, 'DOTS');
            const rightItemCount = 3 + 2 * siblingCount;
            for (let i = totalPages - rightItemCount + 1; i <= totalPages; i++) pages.push(i);
        } else if (shouldShowLeftDots && shouldShowRightDots) {
            // en medio
            pages.push(1, 'DOTS');
            for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) pages.push(i);
            pages.push('DOTS', totalPages);
        }

        return pages;
    };

    // Maneja el clic en la página
    const handlePageClick = (page: number) => {
        changePage(page);
    };

    return (
        <StyledPaginationContainer>
            <StyledPaginationList>
                <PageButton
                    onClick={goToPrevPage}
                    disabled={currentPage === 1}
                >
                    Prev
                </PageButton>

                {paginationRange().map((item, index) =>
                    item === 'DOTS' ? (
                        <DotsText key={index}>...</DotsText>
                    ) : item === currentPage ? (
                        <ActivePageButton key={index} onClick={() => handlePageClick(item)}>
                            {item}
                        </ActivePageButton>
                    ) : (
                        <PageButton key={index} onClick={() => handlePageClick(item)}>
                            {item}
                        </PageButton>
                    )
                )}

                <PageButton
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}>
                    Next
                </PageButton>
            </StyledPaginationList>
        </StyledPaginationContainer>
    );
};
