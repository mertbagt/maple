import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { collectionGroup, getDocs, query, where } from "firebase/firestore"
import { useTranslation } from "next-i18next"
import ErrorPage from "next/error"
import { useEffect, useState } from "react"
import styled from "styled-components"

import { Role, useAuth } from "../auth"
import { Col, Container, Row, Spinner } from "../bootstrap"
import { usePublicProfile, usePublishedTestimonyListing } from "../db"
import {
  Back,
  ButtonContainer,
  FeatureCalloutButton
} from "../shared/CommonComponents"
import { Banner } from "../shared/StyledSharedComponents"
import ViewTestimony from "../TestimonyCard/ViewTestimony"

import { LegislatorSidebar } from "./SidebarComponents/LegislatorSidebar"
import { LegislatorTabs } from "./TabComponents/LegislatorTabs"
//import { OrgContactInfo } from "./OrgContactInfo"
//import { ProfileAboutSection } from "./ProfileAboutSection"
//import { ProfileHeader } from "./ProfileHeader"
//import { ProfileLegislators } from "./ProfileLegislators"
//import { VerifyAccountSectionLegacy } from "./VerifyAccountSectionLegacy"

import { useFlags } from "components/featureFlags"
import { firestore } from "components/firebase"
import { Internal } from "components/links"
import { PendingUpgradeBanner } from "components/PendingUpgradeBanner"
import { VerifyAccountSection } from "components/shared"
import { FollowContext, OrgFollowStatus } from "components/shared/FollowContext"

const DirectoryPath = styled.div`
  font-size: 12px;
`

const HeaderBlock = styled.div`
  background-color: white;
  border: "1px #ced4da solid";
  border-radius: 5px;
  margin-top: 8px;
  padding: 16px;
`

const StatBlock = styled(Col)`
  background-color: white;
  border: 1px #ced4da solid;
  border-radius: 5px;
  margin-top: 4px;
  padding: 16px;
`

export function LegislatorPage(props: { id: string }) {
  const { t } = useTranslation("legislators")
  const { result: profile, loading } = usePublicProfile(props.id)

  console.log("Pro: ", profile)

  if (loading) {
    return (
      <Row>
        <Spinner animation="border" className="mx-auto" />
      </Row>
    )
  }
  if (!profile) {
    return <ErrorPage statusCode={404} withDarkMode={false} />
  }

  return (
    <Container className="mt-3 mb-3">
      <DirectoryPath className="align-items-center d-flex flex-nowrap">
        <Internal className="text-decoration-none" href="/">
          {t("home")}
        </Internal>
        <FontAwesomeIcon className="fa-2xs px-2 " icon={faChevronRight} />
        <div style={{ color: "#6c757d" }}>{t("legislators")}</div>
        <FontAwesomeIcon className="fa-2xs px-2 " icon={faChevronRight} />
        <div style={{ color: "#6c757d" }}>{profile.fullName}</div>
      </DirectoryPath>

      <HeaderBlock className="">Header Info Goes Here</HeaderBlock>

      <div className="d-flex flex-wrap gap-2 justify-content-between mt-2">
        <StatBlock className="col-4 flex-grow-1" md="2">
          Stat
        </StatBlock>
        <StatBlock className="col-4 flex-grow-1" md="2">
          Info
        </StatBlock>
        <StatBlock className="col-4 flex-grow-1" md="2">
          Goes
        </StatBlock>
        <StatBlock className="col-4 flex-grow-1" md="2">
          Here
        </StatBlock>
      </div>

      <Row>
        <Col className={`mt-4`} md="9">
          <LegislatorTabs />
        </Col>
        <Col className={`mt-4`} md="3">
          <LegislatorSidebar />
        </Col>
      </Row>
    </Container>
  )
}
