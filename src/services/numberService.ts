export class NumberService {
    public static convertStringToNumberDecimals(numberString: string): number {
        if(typeof numberString !== 'string'){
            console.error(`The value: ${numberString} is not a string and cannot be converted to a number`);
        }

        let trimmedString = numberString.trim();

        if(this.hasIllegalNumberCharacters(numberString) || this.hasMultipleComma(numberString)){
            console.error(`Numberstring: ${numberString} contains illegal characters which might cause incorrect number conversion. This result was omitted from the final result`);
        }

        trimmedString = trimmedString.replaceAll('.', '');
        trimmedString = trimmedString.replace(',', '.');

        return parseFloat(trimmedString);
    }

    private static hasIllegalNumberCharacters(numberString: string): boolean {
        return this.hasWhiteSpace(numberString) || this.hasAlphaOrSymbolCharacters(numberString) || this.hasMultipleComma(numberString); 
    }

    private static hasWhiteSpace(string: string): boolean {
        return /\s/g.test(string);
    }

    private static hasAlphaOrSymbolCharacters(string: string): boolean {
        // if string contains only allowed characters return true otherwise return false
        return /^[0-9,.]*$/.test(string) ? false : true;
    }

    private static hasMultipleComma(numberString: string): boolean {
        const amountOfComma = numberString.match(/,/g);
        if(amountOfComma){
            return amountOfComma.length >= 2;
        }
        return false;
    }
}