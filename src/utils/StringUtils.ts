
export class StringUtils {

    static isEmpty(str: string | null | undefined): boolean {
        return !str || str.trim() === "";
    }

}