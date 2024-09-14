"use client";

import {
  Close,
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title,
  Trigger,
} from "@radix-ui/react-dialog";
import {
  ComponentPropsWithoutRef,
  ElementRef,
  FC,
  forwardRef,
  HTMLAttributes,
  useMemo,
  useCallback,
} from "react";

import { cn } from "@/lib/utils";

const Dialog = Root;

const DialogTrigger = Trigger;

const DialogPortal = Portal;

const DialogClose = Close;

interface DialogOverlayProps extends ComponentPropsWithoutRef<typeof Overlay> {}

const DialogOverlay = forwardRef<
  ElementRef<typeof Overlay>,
  DialogOverlayProps
>(({ className, ...props }, ref) => {
  // Memoize the computed className
  const memoizedClassName = useMemo(() => 
    cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    [className]
  );

  return (
    <Overlay
      ref={ref}
      className={memoizedClassName}
      {...props}
    />
  );
});
DialogOverlay.displayName = Overlay.displayName;

interface DialogContentProps extends ComponentPropsWithoutRef<typeof Content> {
  onClose?: () => void;
}

const DialogContent = forwardRef<
  ElementRef<typeof Content>,
  DialogContentProps
>(({ className, children, onClose, ...props }, ref) => {
  // Memoize the computed className
  const memoizedClassName = useMemo(() => 
    cn(
      "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
      className
    ),
    [className]
  );

  // Memoize the close handler
  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  return (
    <DialogPortal>
      <DialogOverlay />
      <Content
        ref={ref}
        className={memoizedClassName}
        {...props}
      >
        {children}
        <Close
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
          onClick={handleClose}
        >
          <svg className={"size-6"}>
            <use href={`./icons/sprite.svg#lucide/x`} />
          </svg>
          <span className="sr-only">Close</span>
        </Close>
      </Content>
    </DialogPortal>
  );
});
DialogContent.displayName = Content.displayName;

interface DialogHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const DialogHeader: FC<DialogHeaderProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

interface DialogFooterProps extends HTMLAttributes<HTMLDivElement> {}

const DialogFooter: FC<DialogFooterProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

interface DialogTitleProps extends ComponentPropsWithoutRef<typeof Title> {}

const DialogTitle = forwardRef<ElementRef<typeof Title>, DialogTitleProps>(
  ({ className, ...props }, ref) => (
    <Title
      ref={ref}
      className={cn(
        "text-lg font-semibold leading-none tracking-tight",
        className,
      )}
      {...props}
    />
  ),
);
DialogTitle.displayName = Title.displayName;

interface DialogDescriptionProps
  extends ComponentPropsWithoutRef<typeof Description> {}

const DialogDescription = forwardRef<
  ElementRef<typeof Description>,
  DialogDescriptionProps
>(({ className, ...props }, ref) => (
  <Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = Description.displayName;

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
