import { Link } from "react-router-dom";
import { OffcanvasMenuMount } from "@/shared/mobile-menu/MobileMenuCloneContext";
import MenuClone from "@/shared/mobile-menu/MenuClone";

interface SideBarProps {
  open: boolean;
  hamburgerOpen: boolean;
  onClose: () => void;
}

const AVATARS = ["avatar-10", "avatar-11", "avatar-12", "avatar-13", "avatar-14"] as const;

function CloseIconSvg() {
  return (
    <svg width="37" height="38" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M9.19141 9.80762L27.5762 28.1924"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.19141 28.1924L27.5762 9.80761"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/918073302248",
    ariaLabel: "WhatsApp",
    viewBox: "0 0 24 24",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.36.101 11.949c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.582 0 11.943-5.361 11.946-11.95 0-3.193-1.245-6.19-3.503-8.45",
  },
  {
    label: "Google",
    href: "https://maps.app.goo.gl/e2k7gFiubpNxbLCN6",
    ariaLabel: "Google",
    viewBox: "0 0 24 24",
    path: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z",
  },
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/company/infin-digital",
    ariaLabel: "LinkedIn",
    path: "M15.3352 15.339H12.6697V11.1622C12.6697 10.1662 12.6495 8.8845 11.2807 8.8845C9.89102 8.8845 9.67872 9.9683 9.67872 11.0887V15.339H7.01322V6.75H9.57372V7.9207H9.60822C9.96602 7.2457 10.836 6.53325 12.1357 6.53325C14.8365 6.53325 15.336 8.3108 15.336 10.6245L15.3352 15.339ZM4.00275 5.57475C3.14475 5.57475 2.4555 4.88025 2.4555 4.026C2.4555 3.1725 3.1455 2.47875 4.00275 2.47875C4.85775 2.47875 5.55075 3.1725 5.55075 4.026C5.55075 4.88025 4.857 5.57475 4.00275 5.57475ZM5.33925 15.339H2.66625V6.75H5.33925V15.339ZM16.6687 0H1.32825C0.594 0 0 0.5805 0 1.29675V16.7033C0 17.4202 0.594 18 1.32825 18H16.6665C17.4 18 18 17.4202 18 16.7033V1.29675C18 0.5805 17.4 0 16.6665 0H16.6687Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/infindigital.in/",
    ariaLabel: "Instagram",
    path: "M9.92475 0C10.9376 0.00167406 11.4509 0.00703828 11.8945 0.0202418L12.0692 0.025948C12.2709 0.0331213 12.47 0.0421215 12.7101 0.0533719C13.6678 0.0976265 14.3211 0.249129 14.8949 0.471887C15.4881 0.700648 15.9892 1.00966 16.4894 1.50993C16.9889 2.0102 17.298 2.51271 17.5275 3.10448C17.7494 3.67751 17.901 4.33153 17.946 5.28931C17.9567 5.52933 17.9653 5.72841 17.9725 5.93024L17.9781 6.10492C17.9913 6.5484 17.9973 7.06177 17.9992 8.07471L17.9999 8.74577C18 8.82777 18 8.91237 18 8.99967L17.9999 9.25357L17.9994 9.92472C17.9977 10.9376 17.9923 11.451 17.9791 11.8944L17.9734 12.0691C17.9662 12.271 17.9572 12.4701 17.946 12.7101C17.9017 13.6679 17.7494 14.3211 17.5275 14.8949C17.2987 15.4882 16.9889 15.9892 16.4894 16.4895C15.9892 16.989 15.4859 17.298 14.8949 17.5275C14.3211 17.7495 13.6678 17.901 12.7101 17.946C12.47 17.9567 12.2709 17.9654 12.0692 17.9725L11.8945 17.9781C11.4509 17.9914 10.9376 17.9973 9.92475 17.9993L9.25359 18C9.1716 18 9.087 18 8.99969 18H8.7458L8.07464 17.9994C7.06175 17.9977 6.54839 17.9924 6.1049 17.9791L5.93022 17.9734C5.72839 17.9662 5.5293 17.9572 5.2893 17.946C4.33151 17.9018 3.67899 17.7495 3.10448 17.5275C2.51195 17.2988 2.01018 16.989 1.50992 16.4895C1.00965 15.9892 0.701394 15.4859 0.471886 14.8949C0.249129 14.3211 0.0983735 13.6679 0.053372 12.7101C0.0426796 12.4701 0.0339582 12.271 0.026893 12.0691L0.0212318 11.8944C0.00806435 11.451 0.00206123 10.9376 0.000117163 9.92472L0 8.07471C0.00167406 7.06177 0.00702925 6.5484 0.0202327 6.10492L0.0259479 5.93024C0.0331212 5.72841 0.0421216 5.52933 0.053372 5.28931C0.0976175 4.33078 0.249129 3.67825 0.471886 3.10448C0.700638 2.51196 1.00965 2.0102 1.50992 1.50993C2.01018 1.00966 2.51271 0.701396 3.10448 0.471887C3.67825 0.249129 4.33077 0.0983735 5.2893 0.0533719C5.5293 0.0426885 5.72839 0.0339673 5.93022 0.026902L6.1049 0.0212407C6.54839 0.00806417 7.06175 0.00206102 8.07464 0.000116949L9.92475 0ZM8.99969 4.49953C6.51298 4.49953 4.49952 6.51518 4.49952 8.99967C4.49952 11.4864 6.51517 13.4998 8.99969 13.4998C11.4864 13.4998 13.4998 11.4842 13.4998 8.99967C13.4998 6.513 11.4841 4.49953 8.99969 4.49953ZM8.99969 6.2996C10.491 6.2996 11.6998 7.50805 11.6998 8.99967C11.6998 10.4909 10.4913 11.6998 8.99969 11.6998C7.50843 11.6998 6.29958 10.4914 6.29958 8.99967C6.29958 7.50841 7.50798 6.2996 8.99969 6.2996ZM13.7249 3.14949C13.1045 3.14949 12.5998 3.65342 12.5998 4.27376C12.5998 4.89411 13.1037 5.39882 13.7249 5.39882C14.3452 5.39882 14.8499 4.89489 14.8499 4.27376C14.8499 3.65342 14.3443 3.14871 13.7249 3.14949Z",
  },
] as const;

function SocialGrid() {
  return (
    <ul className="at-offcanvas-social__grid">
      {socialLinks.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            className="at-offcanvas-social__link"
            aria-label={item.ariaLabel}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height={item.h ?? 18}
              viewBox={item.viewBox ?? "0 0 18 18"}
              fill="none"
              aria-hidden="true"
            >
              <path fillRule="evenodd" clipRule="evenodd" d={item.path} fill="currentColor" />
            </svg>
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function SideBar({ open, hamburgerOpen, onClose }: SideBarProps) {
  const isAnyOpen = open || hamburgerOpen;

  return (
    <OffcanvasMenuMount>
      <MenuClone />
      {/* Overlay */}
      <div
        className={`body-overlay sidebar-overlay ${isAnyOpen ? "apply" : ""}`}
        aria-hidden={!isAnyOpen}
        onClick={onClose}
        onKeyDown={(e) => e.key === "Escape" && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Close sidebar"
      />

      {/* at-offcanvas-area */}
      <div className="at-offcanvas-area" aria-hidden={!open}>
        <div className={`at-offcanvas ${open ? "opened" : ""}`}>
          <div className="at-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="at-offcanvas-logo">
              <Link to="/" className="text-decoration-none d-inline-flex align-items-center" aria-label="Infin Digital">
                <img className="dark-mode-invert" src="/assets/imgs/template/logo/infin-logo.svg" alt="INFIN Digital, digital marketing agency in Mangalore" style={{ height: 26, width: "auto" }} />
              </Link>
            </div>
            <div className="at-offcanvas-close-btn">
              <button type="button" className="close-btn close-sidebar" aria-label="Close" onClick={onClose}>
                <CloseIconSvg />
              </button>
            </div>
          </div>

          <div className="at-offcanvas-content d-none d-xl-block">
            <h3 className="at-offcanvas-title">Howdy!</h3>
            <p className="fz-font-lg">
              We&apos;re a Mangalore-based web design and digital marketing agency helping brands grow online through design, strategy, and measurable results.
            </p>
          </div>

          <div className="at-offcanvas-menu d-xl-none pb-50">
            <nav />
          </div>

          <div className="at-offcanvas-gallery d-none d-xl-block">
            <div className="sec-2-home-5__avatars-row d-flex gap-2">
              {AVATARS.map((name) => (
                <div key={name} className="sec-2-home-5__avatar-sm at-offcanvas-gallery-img">
                  <img className="img-cover" src={`/assets/imgs/template/avatar/${name}.webp`} alt="" width={80} height={80} />
                </div>
              ))}
            </div>
          </div>

          <div className="at-offcanvas-contact">
            <h5 className="at-offcanvas-title sm">Get in touch</h5>
            <ul>
              <li>
                <a className="fz-font-lg" href="tel:+918073302248">
                  +91 80733 02248
                </a>
              </li>
              <li>
                <a className="fz-font-lg" href="mailto:contact@infindigital.in">
                  contact@infindigital.in
                </a>
              </li>
              <li>
                <a className="fz-font-lg" href="#" onClick={(e) => e.preventDefault()}>
                  1st floor, Shah Complex, Opposite Radha Medical, Bendoorwell, <br />
                  Kankanady, Mangaluru, Karnataka 575002
                </a>
              </li>
            </ul>
          </div>

          <div className="at-offcanvas-social">
            <h3 className="at-offcanvas-title sm">Follow Us</h3>
            <SocialGrid />
          </div>
        </div>
      </div>

      {/* at-offcanvas-2-area */}
      <div className={`at-offcanvas-2-area ${hamburgerOpen ? "menu-open" : ""}`} aria-hidden={!hamburgerOpen}>
        <div className="offcanvas-bg" />
        <div className="at-offcanvas-2-wrapper offcanvas-menu sidebar-left">
          <div className="at-offcanvas-2-left">
            <div className="at-header-logo d-flex justify-content-between align-items-center mb-50">
              <Link to="/" className="text-decoration-none d-inline-flex align-items-center" aria-label="Infin Digital">
                <img className="dark-mode-invert" src="/assets/imgs/template/logo/infin-logo.svg" alt="INFIN Digital, digital marketing agency in Mangalore" style={{ height: 26, width: "auto" }} />
              </Link>
              <span className="hamburger-close-btn close-sidebar" role="button" tabIndex={0} aria-label="Close" onClick={onClose}>
                <CloseIconSvg />
              </span>
            </div>

            <div className="at-offcanvas-menu counter-row">
              <nav />
            </div>

            <div className="at-offcanvas-social">
              <SocialGrid />
            </div>

            <span
              className="hamburger-close-btn hamburger-mobile-close-btn close-sidebar d-md-none"
              role="button"
              tabIndex={0}
              aria-label="Close"
              onClick={onClose}
            >
              CLOSE
            </span>
          </div>
        </div>
      </div>
    </OffcanvasMenuMount>
  );
}

