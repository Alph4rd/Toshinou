/*
Created by Freshek on 11.11.2017
*/

class NpcSettingsWindow {
  createWindow() {
    this.npcSettingsWindow = WindowFactory.createWindow({width: 300, height: 100, text: "NPC Killer Settings", scrollable: true});

    var simpleDiv = jQuery("<div>").css("height", "100%").appendTo(this.npcSettingsWindow);

    jQuery("<input>").attr("type", "checkbox").change(function() {
      window.settings.killNpcs = this.checked;
    }).appendTo(simpleDiv);
    jQuery("<label>").text("Enable NPC killer (experimental)").appendTo(simpleDiv);
    jQuery("<br>").appendTo(simpleDiv);

    this.knownNpcList.forEach(n => {
      jQuery("<input>").attr("type", "checkbox").change(function() {
        window.settings.setNpc(n, this.checked);
      }).appendTo(simpleDiv);
      jQuery("<label>").text(n).appendTo(simpleDiv);
      jQuery("<br>").appendTo(simpleDiv);
    });
  }

  get knownNpcList() {
    return [
      "-=[ Streuner ]=-",
      "-=[ Aider Streuner ]=-",
      "-=[ Recruit Streuner ]=-",
      "-=[ Lordakia ]=-",
      "-=[ Devolarium ]=-",
      "-=[ Mordon ]=-",
      "-=[ Sibelon ]=-",
      "-=[ Saimon ]=-",
      "-=[ Lordakium ]=-",
      "-=[ Sibelonit ]=-",
      "-=[ Kristallin ]=-",
      "-=[ Kristallon ]=-",
      "-=[ StreuneR ]=-",
      "-=[ Protegit ]=-",
      "-=[ Cubikon ]=-",
      "..::{ Boss Streuner }::..",
      "..::{ Boss Lordakia }::..",
      "..::{ Boss Mordon }::..",
      "..::{ Boss Saimon }::..",
      "..::{ Boss Devolarium }::..",
      "..::{ Boss Sibelonit }::..",
      "..::{ Boss Sibelon }::..",
      "..::{ Boss Lordakium }::...",
      "..::{ Boss Kristallin }::..",
      "..::{ Boss Kristallon }::..",
      "..::{ Boss StreuneR }::..",
      "( UberStreuner )",
      "( UberLordakia )",
      "( UberMordon )",
      "( UberSaimon )",
      "( UberDevolarium )",
      "( UberSibelonit )",
      "( UberSibelon )",
      "( UberLordakium )",
      "( UberKristallin )",
      "( UberKristallon )",
      "( UberStreuneR )",
      "-=[ Blighted Kristallon ]=-",
      "-=[ Plagued Kristallin ]=-",
      "-=[ Plague Rocket ]=-"
    ];
  }
}
