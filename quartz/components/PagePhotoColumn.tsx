import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface PagePhotoColumnImage {
  url: string
  alt?: string
  width?: number | string
  paddingBottom?: string // e.g. "2rem"
  link?: string // URL to wrap the image in
}

interface PagePhotoColumnOpts {
  images: PagePhotoColumnImage[]
  topPadding?: string
  squareCorners?: boolean
}

const defaultOpts: PagePhotoColumnOpts = {
  images: [],
  topPadding: "0",
  squareCorners: false,
}

export default ((userOpts?: Partial<PagePhotoColumnOpts>) => {
  const opts = { ...defaultOpts, ...userOpts }
  function PagePhotoColumn(_props: QuartzComponentProps) {
    return (
      <div
        class={`page-photo-column${opts.squareCorners ? " square-corners" : ""}`}
        style={{ paddingTop: opts.topPadding }}
      >
        {opts.images.map((img, i) => {
          const imgElement = (
            <img
              src={img.url}
              alt={img.alt ?? ""}
              width={img.width ?? undefined}
              style={{
                marginBottom: img.paddingBottom ?? "1.5rem",
                display: "block",
                width: typeof img.width === "string" ? img.width : undefined,
                maxWidth: "100%",
              }}
            />
          )
          return img.link ? (
            <a key={i} href={img.link} target="_blank" rel="noopener noreferrer" style={{ display: "block" }}>
              {imgElement}
            </a>
          ) : (
            <span key={i}>{imgElement}</span>
          )
        })}
      </div>
    )
  }

  PagePhotoColumn.css = `
    .page-photo-column {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .page-photo-column.square-corners img {
      border-radius: 0 !important;
    }
    .page-photo-column a {
      text-decoration: none;
    }
  `
  return PagePhotoColumn
}) satisfies QuartzComponentConstructor