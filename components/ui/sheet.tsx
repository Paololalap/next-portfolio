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
import { cva, type VariantProps } from "class-variance-authority";
import {
  ComponentPropsWithoutRef,
  ElementRef,
  FC,
  forwardRef,
  HTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

const Sheet = Root;

const SheetTrigger = Trigger;

const SheetClose = Close;

const SheetPortal = Portal;

interface SheetOverlayProps extends ComponentPropsWithoutRef<typeof Overlay> {}

const SheetOverlay = forwardRef<ElementRef<typeof Overlay>, SheetOverlayProps>(
  ({ className, ...props }, ref) => (
    <Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className,
      )}
      {...props}
      ref={ref}
    />
  ),
);
SheetOverlay.displayName = Overlay.displayName;

const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  },
);

interface SheetContentProps
  extends ComponentPropsWithoutRef<typeof Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = forwardRef<ElementRef<typeof Content>, SheetContentProps>(
  ({ side = "right", className, children, ...props }, ref) => (
    <SheetPortal>
      <SheetOverlay />
      <Content
        ref={ref}
        className={cn(sheetVariants({ side }), className)}
        {...props}
      >
        {children}
        <Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
          <svg className={"size-6"}>
            <use href={`./icons/sprite.svg#lucide/x`} />
          </svg>
          <span className="sr-only">Close</span>
        </Close>
      </Content>
    </SheetPortal>
  ),
);
SheetContent.displayName = Content.displayName;

interface SheetHeaderProps extends HTMLAttributes<HTMLDivElement> {}

const SheetHeader: FC<SheetHeaderProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);
SheetHeader.displayName = "SheetHeader";

interface SheetFooterProps extends HTMLAttributes<HTMLDivElement> {}

const SheetFooter: FC<SheetFooterProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);
SheetFooter.displayName = "SheetFooter";

interface SheetTitleProps extends ComponentPropsWithoutRef<typeof Title> {}

const SheetTitle = forwardRef<ElementRef<typeof Title>, SheetTitleProps>(
  ({ className, ...props }, ref) => (
    <Title
      ref={ref}
      className={cn("text-lg font-semibold text-foreground", className)}
      {...props}
    />
  ),
);
SheetTitle.displayName = Title.displayName;

interface SheetDescriptionProps
  extends ComponentPropsWithoutRef<typeof Description> {}

const SheetDescription = forwardRef<
  ElementRef<typeof Description>,
  SheetDescriptionProps
>(({ className, ...props }, ref) => (
  <Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SheetDescription.displayName = Description.displayName;

export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
};
