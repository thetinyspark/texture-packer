export class UserArgs {

    public size: number = 1;
    public directory: string = "./";


    constructor() {
        let args: string[] = process.argv;
        let current: string = "";
        let i: number = 0;

        for (; i < args.length; i++) {

            current = args[i];

            if (current == "--size" && i + 1 < args.length) {
                this.size = this.getNextPowerOf2( parseInt(args[i+1]));
            }

            if (current == "--dir" && i + 1 < args.length) {
                this.directory = args[i+1];
            }
        }
    }

    private getNextPowerOf2(value: number): number {
        let num: number = 1;
        while (num < value) {
            num *= 2;
        }

        return num;
    }
}