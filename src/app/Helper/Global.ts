export class Global
{
    static sizeToCarbon(size: number)
    {
        // 1 Mo = 0,05 kg de carbone

        return Math.round((size / (1024 * 1024)) * 1000) / 1000;
    }
}
