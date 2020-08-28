import React, { useCallback, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";

// import { Container } from "next/app";

// const app = () => {
//   return <Container> Nothing here</Container>
// };

// export default app;

const app = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                srcset: "",
                ...x,
                source: x.src,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
};

const photos = [
  {
    src:
      "https://lh3.googleusercontent.com/aT0hxlQ8A9tTK6N4oCqdCrIpo3ftCobyY2N7nxkIuhnTGGeZ-dP9MhChoxg9qDAPS502rZb0yvN65CGlPgU2_x4DsZ4bgXFIG_wZFac7_LeM2AKD1GaT82D7QUquWP1JaU4cnhnlng=w2400",
    width: 3,
    height: 2,
    caption: "Trees in spring blooom",
  },
  {
    src:
      "https://lh3.googleusercontent.com/TsfuBDcAlZVxFwDROI1U5LSMepJQPmbxlvvzhw8sg6CS3MsFZiCMuLtZw2SBZz3-U_QQoy8o0Ej7YV6vS607NRMNgzOeixev_d0DNAiS1jLl5Rd4z5JgXNguQT1RkBB0krUxnfqdRg=w2400",
    width: 2,
    height: 3,
    caption: "Home",
  },
  {
    src:
      "https://lh3.googleusercontent.com/qOMvO5L437obg4r24XRfDvuTcdTk5IXDkrj-Yc9OJu2Y5OPVJ0f2Gy4DNBoS9CsfiR8N8Q3MsLJILkBa_aFrE2rzTNv6VubJfM3hYDEJAVr_FKC2luA0JFTaJLKORyXbYXMkim9evA=w2400",
    width: 2,
    height: 3,
    caption: "One of the nice streets",
  },
  {
    src:
      "https://lh3.googleusercontent.com/2GZ_hjE_JX48MXzbCYmeDoYElU-3J86kB3GIgSgK0OISEEa_QBUW4OJBmSsWW2gUQYDHVwuwuccKp9AKCX6zUbvgY0hTuNLyL9jfau2AxoEBDjNxQXgk_n-SpsO6ci3OJGpNXdeDKQ=w2400",
    width: 3,
    height: 2,
    caption: "Aged stone mill",
  },
  {
    src:
      "https://lh3.googleusercontent.com/gaDtKdyiNSJx9v47KGAmHi9Jp5XfUnrdWzXdcwbBvXOCaMpJVJVaGoiKgfPIknHeARzyoCmmIXTASG3YzDs_iixzE4_jTj9Tz2kcdHGAQIHRyT1IT4Gh2nPPvZT1puYvu-9BOBrmwA=w2400",
    width: 2,
    height: 3,
    caption: "Nothing but stripes",
  },
  {
    src:
      "https://lh3.googleusercontent.com/HenjvJTbGmA0TZhjpryt9mcN0qs2jPV3vRygTxCjmAAH0vCOw0ZcYgiEWeHSk6wlht7fABdFThn3Y8Pt98iUGdSqWTJC6vrBCtpyS5PySOipWhIf6UAyRS8xDPX6KM0eut11NF1j8Q=w2400",
    width: 2,
    height: 3,
    caption: "Shelter",
  },
];

export default app;
