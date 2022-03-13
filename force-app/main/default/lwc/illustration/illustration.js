import { LightningElement, api } from "lwc";
import Desert from "./desert.html";
import defaultTemplate from "./illustration.html";
import Fishing from "./fishing.html";
import GoCamping from "./goingCamping.html";
import GoFishing from "./goneFishing.html";
import LakeMountain from "./lakeMountain.html";
import Maintenance from "./maintenance.html";
import NoAccess from "./noAccess.html";
import NoConnection from "./noConnection.html";
import NoContent from "./noContent.html";
import NoEvent from "./noEvent.html";
import NoPreview from "./noPreview.html";
import NoTask from "./noTask.html";
import NotAvailableInLightning from "./notAvailableLightning.html";
import OpenRoad from "./openRoad.html";
import PageNotAvailable from "./pageNotAvailable.html";
import Research from "./research.html";
import Setup from "./setup.html";

const variantTemplateMap = {
  "Fishing Deals": Fishing,
  "Going Camping": GoCamping,
  "Lake Mountain": LakeMountain,
  "Gone Fishing": GoFishing,
  Desert: Desert,
  Maintenance: Maintenance,
  "No Access": NoAccess,
  "No Connection": NoConnection,
  "No Content": NoContent,
  "No Events": NoEvent,
  "No Preview": NoPreview,
  "No Task": NoTask,
  "Not Available In Lightning": NotAvailableInLightning,
  "Open Road": OpenRoad,
  "Page Not Available": PageNotAvailable,
  Research: Research,
  Setup: Setup
};

export default class Illustration extends LightningElement {
  @api size = "small";
  @api variant;
  @api heading;
  @api message;
  @api showFooter = false;

  render() {
    return this.variant ? variantTemplateMap[this.variant] : defaultTemplate;
  }

  get sizeClass() {
    const baseClass = "slds-illustration slds-illustration_";
    const size = this.size.toLowerCase() === "small" ? "small" : "large";
    return baseClass + size;
  }
}
