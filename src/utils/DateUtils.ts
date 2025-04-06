
export class DateUtils {

    static subtractDays(date: Date, days: number): Date {
        const result = new Date(date);
        result.setDate(date.getDate() - days);
        return result;
    }

    static padStart(value: number): string {
        return value.toString().padStart(2, '0');
    }

    static toString(date: Date): string {
        const padStart = (value: number): string =>
            value.toString().padStart(2, '0');
        return `${date.getFullYear()}-${padStart(date.getMonth() + 1)}-${padStart(date.getDate())}T${padStart(date.getHours())}:${padStart(date.getMinutes())}:${padStart(date.getSeconds())}`;
    }

    static fromString(date: string): Date {
        return new Date(date);
    }

}