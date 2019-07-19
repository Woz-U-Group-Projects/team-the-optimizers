package com.group.The_Optimizers;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/MyServlet")
public class MyServlet extends HttpServlet {

	/**
	 * 
	 */
	private static final long serialVersionUID = -9150491255710982931L;

	  // resource management
    // throws ServletException
    public void init() throws ServletException {
        super.init();
    }

    // resource management
    public void destroy() {
        super.destroy();
    }

    // Read
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("doGet was called.");
    }
}
