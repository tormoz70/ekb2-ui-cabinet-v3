

const _pad = function(value: number): string {
    return value.toString().padStart(2, '0');
}

const _year = function(date: Date): string {
    return `${date.getFullYear()}`
}
const _month = function(date: Date): string {
    return `${_pad(date.getMonth() + 1)}`
}
const _day = function(date: Date): string {
    return `${_pad(date.getDate())}`
}
const _hour = function(date: Date): string {
    return `${_pad(date.getHours())}`
}
const _min = function(date: Date): string {
    return `${_pad(date.getMinutes())}`
}
const _sec = function(date: Date): string {
    return `${_pad(date.getSeconds())}`
}

export class DateUtils {

    static subtractDays(date: Date, days: number): Date {
        const result = new Date(date);
        result.setDate(date.getDate() - days);
        return result;
    }

    static addDays(date: Date, days: number): Date {
        const result = new Date(date);
        result.setDate(date.getDate() + days);
        return result;
    }

    static toString(dt: Date | undefined): string |undefined {
        if(dt) {
            return `${_year(dt)}-${_month(dt)}-${_day(dt)}T${_hour(dt)}:${_min(dt)}:${_sec(dt)}`;
        }
        return undefined;
    }

    static fromString(date: string | undefined): Date | undefined {
        return date ? new Date(date) : undefined;
    }

    static formatIsoDate(dateString: string): string {
        const dt: Date = new Date(dateString);
        return `${_year(dt)}.${_month(dt)}.${_day(dt)} ${_hour(dt)}:${_min(dt)}:${_sec(dt)}`;
    }
    static formatIsoDateMin(dateString: string): string {
        const dt: Date = new Date(dateString);
        return `${_year(dt)}.${_month(dt)}.${_day(dt)} ${_hour(dt)}:${_min(dt)}`;
    }

}