"use client";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./style.module.scss";
import { SectionTitle, Text } from "@styles/styledComponent";
import { CustomImage, Input, LineDivider, Select } from "@components/ui";
import { Canvas, ContactForm } from "@components/parts";
import {
  Analytics,
  AppleStore,
  BusinessProfitability,
  Dashboard,
  FeatureTwo,
  Financial,
  GPlay,
  LowerSettlement,
  P2pTransaction,
  Rewards,
  ScanPay,
  StbLogo,
  Support,
  Transaction,
} from "@public/assets";
import {
  Envelope,
  EnvelopeFill,
  LockFill,
  TelephoneFill,
} from "react-bootstrap-icons";
import Link from "next/link";

const Content = () => {
  return (
    <main className={styles.landingPage}>
      <section className={styles.aboutSection} id="about">
        <Container>
          <Row>
            <CustomImage src={StbLogo} alt="STB Cash" />
            <Col lg={12}>
              <SectionTitle>
                ABOUT{" "}
                <span style={{ color: "var(--accentColor)" }}>
                  MERCHANT PORTAL
                </span>{" "}
              </SectionTitle>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <Text>
                The STB CASH Merchant Portal is an extension of the SpendTheBits
                ecosystem designed to cater to the needs of business users. This
                web-based portal allows merchants to accept payments, manage and
                track transactions. It also view settlement histories, and
                analyze payment data to improve business operations. The STB
                Cash Merchant also allows merchant to withdraw money back to
                their bank accounts. With the portal, merchants can:
              </Text>
              <ul>
                <li>
                  View real-time transaction data, including transaction
                  amounts, dates, times, and status
                </li>
                <li>
                  Search and filter transactions by various criteria, such as
                  date range, transaction type, and amount
                </li>
                <li>
                  View detailed settlement histories, including settlement
                  dates, amounts, and fees
                </li>
                <li>
                  Analyze payment data to identify trends and patterns, and
                  track key metrics such as average transaction size and total
                  sales volume
                </li>
                <li>
                  Manage and edit merchant account settings, such as contact
                  information, banking details, and payment preferences
                </li>
                <li>
                  Generate reports in various formats, including CSV, Excel, and
                  PDF, for easy data analysis and sharing
                </li>
                <li>
                  Receive notifications and alerts about important account
                  activity, such as settlements and chargebacks
                </li>
                <li>
                  Access support resources, including documentation, FAQs, and
                  contact information for the STB CASH support team
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.featuresSection} id="features">
        <Container>
          <Row>
            <Col lg={12}>
              <SectionTitle>
                <span style={{ color: "var(--accentColor)" }}>
                  MERCHANT PORTAL
                </span>{" "}
                FEATURES
              </SectionTitle>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <SectionTitle>Lower Settlement Fees</SectionTitle>
              <LineDivider />
              <Text>
                In today's competitive business landscape, every penny counts.
                With lower settlement fees, businesses can retain more of their
                hard-earned revenue and reinvest it into growth initiatives or
                customer-centric programs. This competitive low rate is a
                game-changer for businesses of all sizes, allowing them to keep
                more of their profits. By choosing our payment processing
                services, businesses can enjoy substantial cost savings, which
                can add up to significant long-term benefits.
              </Text>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <CustomImage src={LowerSettlement} alt="Scan and Pay" />
            </Col>
          </Row>
          {/* <Row>
            <Col xs={12} md={6} lg={6}>
              <CustomImage src={Transaction} alt="Second Feature" />
            </Col>
            <Col xs={12} md={6} lg={6}>
              <SectionTitle>1.5% Settlement Fee: A Game-Changer</SectionTitle>
              <LineDivider />
              <Text>
                At only 1.5%, our merchant settlement fees are among the lowest
                in the industry. This competitive rate is a game-changer for
                businesses of all sizes, allowing them to keep more of their
                profits. By choosing our payment processing services, businesses
                can enjoy substantial cost savings, which can add up to
                significant long-term benefits.
              </Text>
            </Col>
          </Row> */}
          <Row>
            <Col xs={12} md={6} lg={6}>
              <CustomImage src={BusinessProfitability} alt="Scan and Pay" />
            </Col>
            <Col xs={12} md={6} lg={6}>
              <SectionTitle>
                Direct Impact on Business Profitability
              </SectionTitle>
              <LineDivider />
              <Text>
                Lower settlement fees directly impact a business's
                profitability. Every transaction processed at a lower rate
                contributes to increased margins. Businesses can utilize these
                savings to enhance their product offerings, invest in marketing
                campaigns, or simply improve their bottom line. In a highly
                competitive market, where profit margins are often razor-thin,
                lower settlement fees can provide a much-needed competitive
                edge.
              </Text>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <SectionTitle>Transparency and Predictability</SectionTitle>
              <LineDivider />
              <Text>
                Our transparent and predictable fee structure ensures that
                businesses know exactly what they are paying for. No hidden fees
                or unexpected charges. With our competitive settlement fees,
                businesses can accurately calculate their transaction costs and
                make informed decisions about their payment processing strategy.
              </Text>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <CustomImage src={Analytics} alt="Second Feature" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <CustomImage src={Support} alt="Scan and Pay" />
            </Col>
            <Col xs={12} md={6} lg={6}>
              <SectionTitle>
                Seamless Integration and Exceptional Support
              </SectionTitle>
              <LineDivider />
              <Text>
                We understand that businesses need a seamless and reliable
                payment processing experience. Our platform integrates
                effortlessly with various e-commerce platforms and point-of-sale
                systems, ensuring a smooth checkout process for customers.
                Additionally, our dedicated customer support team is always on
                hand to assist businesses with any queries or technical issues
                they may encounter.
              </Text>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <SectionTitle>Dashboard for Transaction Management</SectionTitle>
              <LineDivider />
              <Text>
                Merchants have access to a comprehensive dashboard that provides
                real-time insights into payment trends, transaction statuses,
                and customer behaviors.
              </Text>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <CustomImage src={Dashboard} alt="Second Feature" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.signUpSection} id="register">
        <Container>
          <Row>
            <Col lg={12}>
              <SectionTitle>
                LET'S GET YOU{" "}
                <span style={{ color: "var(--accentColor)" }}>STARTED</span>!
              </SectionTitle>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={9} lg={6}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.downloadAppSection} id="download">
        <Container>
          <Row>
            <Col xs={12} md={12} lg={8}>
              <SectionTitle>
                Download{" "}
                <span style={{ color: "var(--accentColor)" }}>
                  STB Cash App
                </span>{" "}
                Now!
              </SectionTitle>
            </Col>
            <Col xs={12} md={12} lg={4}>
              <Link href="https://play.google.com/store/apps/details?id=com.stb.cash">
                <CustomImage src={GPlay} alt="Google Play Store" />
              </Link>
              <Link href="https://apps.apple.com/app/spend-the-bits-cash/id6471470011">
                <CustomImage src={AppleStore} alt="Apple Store" />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Content;
