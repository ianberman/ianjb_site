import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

const defaultOpts = {
  imageUrl: "images/card.png", // Change this to your image path
  alt: "Profile photo",
  width: 260,
//   borderRadius: "50%",
}

export default ((userOpts?: Partial<typeof defaultOpts>) => {
  const opts = { ...defaultOpts, ...userOpts }
  function PagePhoto(_props: QuartzComponentProps) {
    return (
      <div class="page-photo-container">
        <a href="">
          <img
            src={opts.imageUrl}
            alt={opts.alt}
            width={opts.width}
          //   style={{ borderRadius: opts.borderRadius }}
          />
        </a>
        <div class="photo-links">
          <a href="about">about</a>
          <a href="mailto:ianberman@ianjb.com">contact</a>
        </div>
      </div>
    )
  }

  PagePhoto.css = `
    .page-photo-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .page-photo-container img {
      display: block;
    }
    .photo-links {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 0.5rem;
      max-width: 260px;
    }
  `
  return PagePhoto
}) satisfies QuartzComponentConstructor