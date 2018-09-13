import * as $ from "jquery";

export class Woopler {
    asyncConsoleLog(message: string = "") {
        $.ajax("https://api.thecatapi.com/v1/images/search?", {
            dataType: 'jsonp',
            success: (data:{
                url: string;
            }[]) => {
                const catImage = data.pop();

                if (catImage) {
                    $(document).append(`<img src="${catImage.url}">`);
                }

                console.log(message);
            }
        });
    }
}