import { collectionGroup, getDocs, query, where } from "firebase/firestore"
import { useTranslation } from "next-i18next"
import ErrorPage from "next/error"
import { useEffect, useState } from "react"

import { Role, useAuth } from "../auth"
import { Col, Container, Row, Spinner } from "../bootstrap"
import { usePublicProfile, usePublishedTestimonyListing } from "../db"
import { Banner } from "../shared/StyledSharedComponents"
import ViewTestimony from "../TestimonyCard/ViewTestimony"

//import { OrgContactInfo } from "./OrgContactInfo"
//import { ProfileAboutSection } from "./ProfileAboutSection"
//import { ProfileHeader } from "./ProfileHeader"
//import { ProfileLegislators } from "./ProfileLegislators"
//import { VerifyAccountSectionLegacy } from "./VerifyAccountSectionLegacy"

import { useFlags } from "components/featureFlags"
import { firestore } from "components/firebase"
import { PendingUpgradeBanner } from "components/PendingUpgradeBanner"
import { FollowContext, OrgFollowStatus } from "components/shared/FollowContext"
import { VerifyAccountSection } from "components/shared"

export function LegislatorPage(props: { id: string }) {
  const { t } = useTranslation("legislators")
  const { result: profile, loading } = usePublicProfile(props.id)

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
    <>
      <h1>{t("test2")}</h1>
    </>
  )
}
