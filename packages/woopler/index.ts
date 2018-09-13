import * as $ from "jquery";

export class Woopler {
    asyncConsoleLog(message: string = "") {
        $.ajax("https://api.thecatapi.com/v1/images/search?mime_type=jpg,png", {
            success: (data:{
                url: string;
            }[]) => {
                const img = data.pop();

                if (img) {
                    $(`<img src="${img.url}">`)
                        .one('load', () => {
                            console.log(message);
                        })
                        .appendTo('body')

                } else {
                    console.log(`Sorry, no cats today :( btw message was '${message}'`);
                }
            }
        });
    }
}