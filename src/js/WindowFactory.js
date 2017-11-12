/*
Created by Freshek on 07.10.2017
*/
class WindowFactory {

  static createWindow(params) {
    var div = jQuery("<div/>", {
      width: params.width != null ? params.width : 400,
      height: params.height != null ? params.height + 40:'',
    });

    div.attr("class", "window");

    var content = jQuery("<div/>");

    content.attr("class", "content");

    var header = jQuery("<h4/>", {
      text: params.text != null ? params.text : "window"
    });

    header.attr("class", "header");

    var minimizeBtn = jQuery("<span/>", {
      text: "_"
    });

    minimizeBtn.attr("class", "minimize-btn");

    div.css({backgroundColor: "transparent", position: "absolute"});
    div.appendTo("body");

    var headerCol = ColorConverter.hexToRgb(window.globalSettings.headerColor);
    header.css({backgroundColor: ColorConverter.combine(headerCol.r, headerCol.g, headerCol.b, window.globalSettings.headerOpacity)});
    header.appendTo(div);

    minimizeBtn.appendTo(header);

    var bgCol = ColorConverter.hexToRgb(window.globalSettings.windowColor);
    content.css({backgroundColor: ColorConverter.combine(bgCol.r, bgCol.g, bgCol.b, window.globalSettings.windowOpacity), overflowY: params.scrollable ? "scroll" : "inherit"});
    content.appendTo(div);

    minimizeBtn.click(function() {
      if (content.css("display") !== "none") {
        content.fadeOut(500);
      }
      else {
        content.fadeIn(500);
      }
    });

    div.draggable({handle: header});

    return content;
  }
}
