declare global {
  declare module "react" {
    interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
      tsx?: boolean;
      global?: boolean;
    }
  }
}
