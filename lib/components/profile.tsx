import React, { useState, useEffect } from "react";
import { Row, useTheme, Avatar, Text, Spacer, Link } from "@zeit-ui/react";
import NextLink from "next/link";
import ProfileLinks from "./profile-links";
import BLOG from "blog.config";

const avatarImage = () => (
  <Avatar isSquare size={45} alt="avatar" src="/assets/avatar.webp" />
);
const Profile = React.memo(({}) => {
  const theme = useTheme();
  const [showText, setShowText] = useState(theme.type === "dark");
  useEffect(() => {
    const show = theme.type === "dark";
    if (showText !== show) {
      setShowText(show);
    }
  }, [theme.type]);

  return (
    <div className="profile">
      <Row align="bottom" className="user">
        <NextLink href="/" passHref>
          <Link>{avatarImage()}</Link>
        </NextLink>
        <Spacer x={0.5} />
        <NextLink href="/" passHref>
          <Link>
            <Text h2 className="name">
              {BLOG.author}
            </Text>
          </Link>
        </NextLink>
      </Row>
      <ProfileLinks />
      <style jsx>{`
        .profile {
          padding: ${theme.layout.gap} 0;
        }

        .profile :global(.user) {
          padding-left: 0;
          margin-bottom: ${theme.layout.gapQuarter};
          max-width: 100%;
          overflow: hidden;
        }

        .profile :global(.name) {
          margin-top: -3rem;
        }

        @media only screen and (max-width: ${theme.layout.breakpointMobile}) {
          .profile {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 5rem;
          }
        }
      `}</style>
    </div>
  );
});

export default Profile;
