import PageConstraint from "@/Components/PageConstraint";
import PageWrapper from "@/Components/PageWrapper";
import { CONSTANTS } from "@/Constants";
import { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
    title: "SyncPlate | Privacy Policy",
    description: "Meals are a corner-stone of community, Everyone Eats. SyncPlate focuses on bringing more collaboration to the dinner-making process.",
    openGraph: {
        type:"website",
        title: "SyncPlate | Privacy Policy",
        description: "Meals are a corner-stone of community, Everyone Eats. SyncPlate focuses on bringing more collaboration to the dinner-making process.",
        url: "https://keeganbruer.com/SyncPlate/privacy",
        images: [
            {
                url: `${CONSTANTS.BASE_URL}/SyncPlate_Social_Cover.png`,
                width: 1200,
                height: 627
            }
        ]
    }
  };
export default function SyncPlate() {
    return (
        <PageWrapper color="#3C8864">
            <div style={{height:100}}></div>
            <Image
                alt="SyncPlate Icon"
                src="/project_covers/syncplate/icon.png"
                width={150} height={150}
                style={{ borderRadius: 300, position:"relative", zIndex:1, backgroundColor:"#3C8864", border: "1px solid black", marginBottom:-50 }}
            ></Image>
            <PageConstraint>
                <div style={{
                    width: "100%", display: "flex", flexDirection: "column", color: "white", backgroundColor: "#363636",
                    padding: 20, paddingTop: 60,
                    
                }}>
                    <main id="syncplate_privacy" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Privacy Policy for SyncPlate</h1>
        <p><strong>Effective Date:</strong> June 1, 2025</p>
        <p><strong>Developer:</strong> Keegan Bruer</p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>
            SyncPlate does not collect, store, or share any personal information.
          </p>
          <ul>
            <li>No signup or login is required.</li>
            <li>No names, email addresses, or identifiers are collected.</li>
            <li>We do not store usage data on our servers.</li>
          </ul>
        </section>

        <section>
          <h2>2. Third-Party Services</h2>
          <p>
            While we do not collect user data, <strong>SyncPlate uses Google AdSense</strong> to serve ads.
          </p>
          <ul>
            <li>Google may collect certain data to personalize ads, such as device identifiers and usage patterns.</li>
            <li>These services are governed by their own privacy policies.</li>
          </ul>
          <p>
            To learn more about how Google handles data in its advertising services, please visit:
            <br />
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/technologies/ads
            </a>
          </p>
          <p>
            Users can manage ad preferences through their Google account or device settings.
          </p>
        </section>

        <section>
          <h2>3. Children’s Privacy</h2>
          <p>
            SyncPlate does not knowingly collect personal data from children under 13.
            If you believe your child has submitted personal information, please contact us so we can delete it.
          </p>
        </section>

        <section>
          <h2>4. Security</h2>
          <p>
            Since no personal data is collected, there is no risk of user data exposure from the app itself.
            Note that third-party services like Google AdSense may have their own data handling practices.
          </p>
        </section>

        <section>
          <h2>5. Changes to This Policy</h2>
          <p>
            This Privacy Policy may be updated from time to time. Updates will be posted on this page with a revised effective date.
          </p>
        </section>

        <section>
          <h2>6. Contact</h2>
          <p>
            If you have any questions or concerns, please contact the developer:
          </p>
          <p>
            <strong>Keegan Bruer</strong><br />
            Email: <a href="mailto:keegan.bruer@gmail.com">keegan.bruer@gmail.com</a>
          </p>
        </section>
      </main>

                    
                    
                </div>
            </PageConstraint>
            <div style={{height:100}}></div>
        </PageWrapper>
    )
}