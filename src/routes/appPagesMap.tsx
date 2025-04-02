import HomePage from "../pages/home/HomePage";
import { PageType } from "./types";
import ListIcon from '@mui/icons-material/List';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import AppsIcon from '@mui/icons-material/Apps';
import ContactEmergencyIcon from '@mui/icons-material/ContactEmergency';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ChecklistRtlIcon from '@mui/icons-material/ChecklistRtl';
import DnsIcon from '@mui/icons-material/Dns';
import EditAttributesIcon from '@mui/icons-material/EditAttributes';

import LoadingStatPage from "../pages/loadstat/LoadingStatPage";
import DataStatPage from "../pages/datastat/DataStatPage";
import FilmsRegPage from "../pages/filmsreg/FilmsRegPage";
import OrgsPage from "../pages/orgs/OrgsPage";
import OrgsCinemaPage from "../pages/orgs/OrgsCinemaPage";
import OrgsRptUserPage from "../pages/orgs/OrgsRptUserPage";
import OrgsHoldingPage from "../pages/orgs/OrgsHoldingPage";
import RequestsPage from "../pages/rpts/RequestsPage";
import NsiAPage from "../pages/nsi/NsiAPage";
import NsiPusPage from "../pages/nsi/NsiPusPage";
import NsiFilmsPage from "../pages/nsi/NsiFilmsPage";
import NsiDistribsPage from "../pages/nsi/NsiDistribsPage";
import NsiSoftVendorsPage from "../pages/nsi/NsiSoftVendorsPage";
import NsiEqpVendorsPage from "../pages/nsi/NsiEqpVendorsPage";
import NsiOwnershipsPage from "../pages/nsi/NsiOwnershipsPage";
import NsiEqpTypesPage from "../pages/nsi/NsiEqpTypesPage";
import NsiTicketTypesPage from "../pages/nsi/NsiTicketTypesPage";
import NsiShowFormatsPage from "../pages/nsi/NsiShowFormatsPage";
import NsiPuReasonsPage from "../pages/nsi/NsiPuReasonsPage";
import NsiCityPopulationsPage from "../pages/nsi/NsiCityPopulationsPage";
import NsiFutureReleasesPage from "../pages/nsi/NsiFutureReleasesPage";

export const APP_PAGES: Map<String, PageType> = new Map([
    ["home", { element: <HomePage/> }],
    ["loadstat", { element: <LoadingStatPage/>, icon: <ListIcon sx={{paddingX: "1px"}}/> }],
    ["datastat", { element: <DataStatPage/>, icon: <DeveloperBoardIcon/> }],
    ["filmsreg", { element: <FilmsRegPage/>, icon: <PhotoCameraFrontIcon/> }],
    ["orgs", { element: <OrgsPage/>, icon: <AppsIcon/> }],
        ["orgs.cinema", { element: <OrgsCinemaPage/>, icon: <ContactEmergencyIcon/> }],
        ["orgs.holding", { element: <OrgsHoldingPage/>, icon: <DashboardOutlinedIcon/> }],
    ["orgs.rptuser", { element: <OrgsRptUserPage/>, icon: <AssessmentIcon/> }],
    ["rrequests", { element: <RequestsPage/>, icon: <ChecklistRtlIcon/> }],
    ["nsi", { element: <NsiAPage/>, icon: <DnsIcon/> }],
        ["nsi.pus", { element: <NsiPusPage/>, icon: <EditAttributesIcon/> }],
        ["nsi.films", { element: <NsiFilmsPage/>, icon: <EditAttributesIcon/> }],
        ["nsi.distribs", { element: <NsiDistribsPage/>, icon: <EditAttributesIcon/> }],
        ["nsi.softvendors", { element: <NsiSoftVendorsPage/>, icon: <EditAttributesIcon/> }],
        ["nsi.eqpvendors", { element: <NsiEqpVendorsPage/>, icon: <EditAttributesIcon/> }],
        ["nsi.ownerships", { element: <NsiOwnershipsPage/>, icon: <EditAttributesIcon/> }],
        ["nsi.eqptypes", { element: <NsiEqpTypesPage/>, icon: <EditAttributesIcon/> }],
        ["nsi.tickettypes", { element: <NsiTicketTypesPage/>, icon: <EditAttributesIcon/> }],
        ["nsi.showformats", { element: <NsiShowFormatsPage/>, icon: <EditAttributesIcon/> }],
        ["nsi.pureasons", { element: <NsiPuReasonsPage/>, icon: <EditAttributesIcon/> }],
        ["nsi.citypopulations", { element: <NsiCityPopulationsPage/>, icon: <EditAttributesIcon/> }],
        ["nsi.futurereleases", { element: <NsiFutureReleasesPage/>, icon: <EditAttributesIcon/> }],

  ])

export const notFoundPage: PageType = { element: undefined, icon: undefined }

