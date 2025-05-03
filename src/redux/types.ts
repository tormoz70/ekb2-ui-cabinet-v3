
export interface Sorter {
    fieldName: string | undefined;
    direction: "acs" | "desc";
};

export interface Pagginator {
    page: number | undefined;
    limit: number | undefined;
};

