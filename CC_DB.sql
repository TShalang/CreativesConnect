USE [master]
GO
/****** Object:  Database [CC_DB]    Script Date: 2021/07/12 19:03:21 ******/
CREATE DATABASE [CC_DB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CC_DB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\CC_DB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'CC_DB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\CC_DB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [CC_DB] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CC_DB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [CC_DB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [CC_DB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [CC_DB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [CC_DB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [CC_DB] SET ARITHABORT OFF 
GO
ALTER DATABASE [CC_DB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [CC_DB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [CC_DB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [CC_DB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [CC_DB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [CC_DB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [CC_DB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [CC_DB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [CC_DB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [CC_DB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [CC_DB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [CC_DB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [CC_DB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [CC_DB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [CC_DB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [CC_DB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [CC_DB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [CC_DB] SET RECOVERY FULL 
GO
ALTER DATABASE [CC_DB] SET  MULTI_USER 
GO
ALTER DATABASE [CC_DB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [CC_DB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [CC_DB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [CC_DB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [CC_DB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [CC_DB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'CC_DB', N'ON'
GO
ALTER DATABASE [CC_DB] SET QUERY_STORE = OFF
GO
USE [CC_DB]
GO
/****** Object:  Table [dbo].[Customer]    Script Date: 2021/07/12 19:03:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customer](
	[Customer_ID] [int] IDENTITY(1,1) NOT NULL,
	[First_Name] [varchar](50) NULL,
	[Last_Name] [varchar](50) NULL,
	[Contact_Number] [varchar](50) NULL,
	[Email_Address] [varchar](50) NULL,
	[UserID] [int] NULL,
	[Address_ID] [int] NULL,
	[OTP] [varchar](50) NULL,
	[verified] [bit] NULL,
 CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED 
(
	[Customer_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 2021/07/12 19:03:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[UserID] [int] IDENTITY(1,1) NOT NULL,
	[UserRoleID] [int] NULL,
	[UserPassword] [varchar](65) NULL,
	[UserName] [varchar](20) NULL,
	[UserPasswordChangeRequest] [bit] NULL,
	[ResetOTP] [varchar](50) NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User_Address]    Script Date: 2021/07/12 19:03:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User_Address](
	[Address_ID] [int] IDENTITY(1,1) NOT NULL,
	[StreetNumber] [int] NULL,
	[StreetName] [varchar](150) NULL,
	[Postal_Code] [varchar](50) NULL,
	[Province] [varchar](50) NULL,
 CONSTRAINT [PK_User_Address] PRIMARY KEY CLUSTERED 
(
	[Address_ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Customer] ON 

INSERT [dbo].[Customer] ([Customer_ID], [First_Name], [Last_Name], [Contact_Number], [Email_Address], [UserID], [Address_ID], [OTP], [verified]) VALUES (2, N'Admin', N'Admin', N'0825658958', N'the4goaldiggers@gmail.com', 4, 1, N'591384', 0)
SET IDENTITY_INSERT [dbo].[Customer] OFF
GO
SET IDENTITY_INSERT [dbo].[User] ON 

INSERT [dbo].[User] ([UserID], [UserRoleID], [UserPassword], [UserName], [UserPasswordChangeRequest], [ResetOTP]) VALUES (4, 1, N'c1c224b03cd9bc7b6a86d77f5dace40191766c485cd55dc48caf9ac873335d6f', N'Admin', 0, NULL)
SET IDENTITY_INSERT [dbo].[User] OFF
GO
ALTER TABLE [dbo].[Customer]  WITH CHECK ADD  CONSTRAINT [FK_Customer_User] FOREIGN KEY([UserID])
REFERENCES [dbo].[User] ([UserID])
GO
ALTER TABLE [dbo].[Customer] CHECK CONSTRAINT [FK_Customer_User]
GO
USE [master]
GO
ALTER DATABASE [CC_DB] SET  READ_WRITE 
GO
